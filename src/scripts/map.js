import Win from './win'
import GameOver from './gameOver'
import Timer from './timer';
class Map {
  constructor(canvas, timerId) {
    this.canvas = canvas;
    this.map = [
      [1, 1, 1, 1, 0, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
      [1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1],
      [1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
      [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

    ];
    this.timerId = timerId;
    this.createMap = this.createMap.bind(this);
    this.moveElement = this.moveElement.bind(this);
    this.moveOldMan = this.moveOldMan.bind(this);
    this.img = new Image();
    this.img.src = '1.webp';
    this.imageX = 160;
    this.imageY = 0;
    this.img2 = new Image();
    this.img2.src = 'oldman.jpeg';
    this.image2X = 360;
    this.image2Y = 120;
     this.img1 = new Image();
    this.img1.src = 'ice-cream.jpeg'
    this.image1X = 520;
    this.image1Y = 40;
    this.createMap();
    this.img1.onload = this.handleImageLoad.bind(this);
    this.img2.onload = this.handleImageLoad.bind(this);
    this.img.onload = this.handleImageLoad.bind(this);

    document.addEventListener('keydown', (event) => this.moveElement(event));
    this.drawTargetAndEnemy()
    this.moveOldMan()

  }


  drawTargetAndEnemy(){
    const ctx = this.canvas.getContext('2d');
    ctx.drawImage(this.img1,this.image1X , this.image1Y, 40, 40);
    ctx.drawImage(this.img2,this.image2X , this.image2Y, 40, 40);

}

moveOldMan(){
  const speed = 40;
  const ctx = this.canvas.getContext('2d');


  if ((Math.ceil(this.image2X) === 520 && Math.ceil(this.image2Y) === 40)|| Timer.remainingSeconds ===0) {
    const game = new GameOver();
    game.gameOver();
    return;
  }
 
  if (this.imageX===520 && this.imageY===40 ){
    const win =new Win(this.timerId);
    win.gamewin();
    return ;
  }

  if (this.image2X === 520) {
    setTimeout(() => {
      this.image2Y -= speed;
      this.createMap();
      this.drawTargetAndEnemy();
      ctx.drawImage(this.img, this.imageX, this.imageY, 40, 40);
      this.moveOldMan();
    }, 3000);
  } else {
    setTimeout(() => {
      this.image2X += speed;
      this.createMap();
      this.drawTargetAndEnemy();
      ctx.drawImage(this.img, this.imageX, this.imageY, 40, 40);
      this.moveOldMan();
    }, 3000);
  }
 
}

 



  handleImageLoad() {
    this.createMap();
    this.drawTargetAndEnemy();
  }
  createMap() {
    //1 => wall 0=> path 2=>target 3=>start point 4=>enemy
    const mapcontainer = this.canvas;
    const ctx = this.canvas.getContext('2d');
    const cellSize = 40;
     for (let i = 0; i < 15; i++) {
      for (let j = 0; j < 15; j++) {
        const cellValue = this.map[i][j];
        const x = j * cellSize;
        const y = i * cellSize;
          if (cellValue === 0) {
            ctx.fillStyle = 'white';
          } else if (cellValue === 1) {
            ctx.fillStyle = '#ABEED7';
          }
          else if (cellValue === 3) {
          this.img.classList.add('girl');
            ctx.drawImage(this.img, this.imageX, this.imageY, cellSize, cellSize);
          }
        ctx.fillRect(x, y, cellSize, cellSize);

      }
    }
  };


  moveElement(event) {
    event.preventDefault();
    let validMove = false;
    const ctx = this.canvas.getContext('2d');
    const speed = 40;

    if (event.key === 'ArrowLeft') {
      this.imageX -= speed;
      if ((this.map[Math.ceil(this.imageY / 40)][Math.ceil(this.imageX / 40)] === 0 || this.map[Math.ceil(this.imageY / 40)][Math.floor(this.imageX / 40)] === 2)&& !(this.imageY===Math.ceil(this.image2Y)&&this.imageX===Math.ceil(this.image2X))) {
        validMove = true
      } else {
        this.imageX += speed;
      }
    } else if (event.key === 'ArrowRight') {
      this.imageX += speed;
      if ((this.map[Math.ceil(this.imageY / 40)][Math.ceil(this.imageX / 40)] === 0 || this.map[Math.ceil(this.imageY / 40)][Math.ceil(this.imageX / 40)] === 2)&& !(this.imageY===Math.ceil(this.image2Y)&&this.imageX===Math.ceil(this.image2X))) {
        validMove = true
      } else {
        this.imageX -= speed;
      }
    } else if (event.key === 'ArrowUp') {
      this.imageY -= speed;
      if ((this.map[Math.ceil(this.imageY / 40)][Math.ceil(this.imageX / 40)] === 0 || this.map[Math.ceil(this.imageY / 40)][Math.ceil(this.imageX / 40)] === 2)&& !(this.imageY===Math.ceil(this.image2Y)&&this.imageX===Math.ceil(this.image2X))) {
        validMove = true
      } else {
        this.imageY += speed;
      }
    } else if (event.key === 'ArrowDown') {
      this.imageY += speed;
      if ((this.map[Math.ceil(this.imageY / 40)][Math.ceil(this.imageX / 40)] === 0 || this.map[Math.ceil(this.imageY / 40)][Math.ceil(this.imageX / 40)] === 2 || this.map[Math.ceil(this.imageY / 40)][Math.ceil(this.imageX / 40)] === 3)&& !(this.imageY===Math.ceil(this.image2Y)&&this.imageX===Math.ceil(this.image2X))) {
        validMove = true
      } else {
        this.imageY -= speed;
      }
    }

    if (validMove === true) {
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.createMap();
      this.drawTargetAndEnemy();
      ctx.drawImage(this.img, this.imageX, this.imageY, 40, 40);
      if (this.imageX===520 && this.imageY===40 ){
        console.log()
        const win =new Win(this.timerId);
        win.gamewin();
      }
    }
  };
}
export default Map;



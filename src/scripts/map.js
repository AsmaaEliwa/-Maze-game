import Timer from './timer'
class Map {
  constructor(canvas) {
    this.canvas = canvas;
    this.map = [
      [1, 1, 1, 1, 0, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
      [1, 0, 1, 1, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 1],
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
    this.createMap = this.createMap.bind(this);
    this.moveElement = this.moveElement.bind(this);
    this.moveOldMan = this.moveOldMan.bind(this);

    // this.drawTargetAndEnemy();

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
    // this.startTime = null;
    // this.animationFrame = null;
    this.createMap();
    this.img1.onload = this.handleImageLoad.bind(this);
    this.img2.onload = this.handleImageLoad.bind(this);
    this.img.onload = this.handleImageLoad.bind(this);

    document.addEventListener('keydown', (event) => this.moveElement(event));
    this.drawTargetAndEnemy()
    this.moveOldMan()

  }

moveOldMan(){
  const speed=40;
  const ctx = this.canvas.getContext('2d');

  if (this.image2X ===520 &&this.image2Y===120 ){
    setTimeout(() => {
      this.image2Y -=speed;
      this.createMap();
      this.drawTargetAndEnemy();
      this.moveOldMan();
      ctx.drawImage(this.img, this.imageX, this.imageY, 40, 40);
    
     ;}, 1000)
  }else if (this.image2X ===520 &&this.image2Y===40 ){
alert('you lose :(')
  }else{
    setTimeout(() => {
      this.image2X +=speed;
      this.createMap();
      this.drawTargetAndEnemy();
      this.moveOldMan();
      ctx.drawImage(this.img, this.imageX, this.imageY, 40, 40);
    
     ;}, 1000)
  }

 
}


  drawTargetAndEnemy(){
    const ctx = this.canvas.getContext('2d');
    ctx.drawImage(this.img2,this.image2X , this.image2Y, 40, 40);
    ctx.drawImage(this.img1,this.image1X , this.image1Y, 40, 40);

}
  // startAnimation() {
  //   this.startTime = performance.now();
  //   this.moveElement();
  // };
  // stopAnimation() {
  //   cancelAnimationFrame(this.animationFrame);
  // };

  handleImageLoad() {
    this.createMap();
    this.drawTargetAndEnemy();

    // this.moveOldMan();

  }
  createMap() {
    const mapcontainer = this.canvas
    //1 => wall //0=> path// 2=>target //3 =>start point 4=>enemy

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
        // else if (cellValue === 2) {
        //   console.log(x, y)
        //   const img = new Image();
        //   img.src = 'ice-cream.jpeg'
        //   img.onload = function () {
        //     ctx.drawImage(img, x, y, cellSize, cellSize);

        //   };
        //   //   // debugger
        // }
        else if (cellValue === 3) {
          // debugger;
          ctx.drawImage(this.img, this.imageX, this.imageY, cellSize, cellSize);
          if (this.map[Math.floor(this.imageY / 40)][Math.floor(this.imageX / 40)] === 2) {

            alert('yummy i love ice cream !!!!!');
            // stopTimer();

          }
        }
        // else if (cellValue === 4) {

        //   const img = new Image();
        //   img.src = 'oldman.jpeg'
        //   img.classList.add('oldman')
        //   console.log(x, y)
        //   img.onload = function () {
        //     ctx.drawImage(img, x, y, cellSize, cellSize);
        //   };
        // }
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
      if ((this.map[Math.ceil(this.imageY / 40)][Math.ceil(this.imageX / 40)] === 0 || this.map[Math.ceil(this.imageY / 40)][Math.floor(this.imageX / 40)] === 2)&& !(this.imageY===Math.floor(this.image2Y)&&this.imageX===Math.floor(this.image2X))) {
        validMove = true
      } else {
        this.imageX -= speed;
      }
    } else if (event.key === 'ArrowUp') {
      this.imageY -= speed;
      if ((this.map[Math.floor(this.imageY / 40)][Math.floor(this.imageX / 40)] === 0 || this.map[Math.floor(this.imageY / 40)][Math.floor(this.imageX / 40)] === 2)&& !(this.imageY===Math.floor(this.image2Y)&&this.imageX===Math.floor(this.image2X))) {
        validMove = true
      } else {
        this.imageY += speed;
      }
    } else if (event.key === 'ArrowDown') {
      this.imageY += speed;
      // debugger
      if ((this.map[Math.ceil(this.imageY / 40)][Math.ceil(this.imageX / 40)] === 0 || this.map[Math.ceil(this.imageY / 40)][Math.floor(this.imageX / 40)] === 2 || this.map[Math.floor(this.imageY / 40)][Math.floor(this.imageX / 40)] === 3)&& !(this.imageY===Math.floor(this.image2Y)&&this.imageX===Math.floor(this.image2X))) {
        validMove = true
      } else {
        this.imageY -= speed;
      }
    }

    if (validMove === true) {
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      // debugger;
      this.createMap();
      this.drawTargetAndEnemy();

      ctx.drawImage(this.img, this.imageX, this.imageY, 40, 40);
      // this.moveOldMan();

      // requestAnimationFrame(this.moveElement);
    }

  };




  // handleAnimationFrame(event) {
  //   const animationStartTime = performance.now();

  //   function animate(timestamp) {
  //     // Calculate elapsed time
  //     const elapsed = timestamp - animationStartTime;

  //     // Perform animation logic using the elapsed time and event
  //     // ...

  //     // Call requestAnimationFrame() to continue the animation loop
  //     requestAnimationFrame(animate);
  //   }

  //   // Call requestAnimationFrame() for the first time to start the animation
  //   requestAnimationFrame(animate);
  //   requestAnimationFrame(() => moveElement(event));
  // }
















}


export default Map;



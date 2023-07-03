
class Map {
  constructor(canvas) {
    this.canvas = canvas;
    this.createMap = this.createMap.bind(this);
    this.moveElement = this.moveElement.bind(this);
    this.img = new Image();
    this.img.src = '1.webp';
    this.img.onload = this.handleImageLoad.bind(this);
    this.imageX = 240;
    this.imageY = 2;
    this.createMap();
    document.addEventListener('keydown', this.moveElement);

  }


  handleImageLoad() {
    this.createMap();
  }
  createMap() {
    const mapcontainer = this.canvas
    //1 => wall //0=> path// 2=>target //3 =>start point 4=>enemy
    let map = [
      [1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 2, 1],
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
    const ctx = this.canvas.getContext('2d');
    const cellSize = 40;
    for (let i = 0; i < 15; i++) {
      for (let j = 0; j < 15; j++) {
        const cellValue = map[i][j];

        const x = j * cellSize;
        const y = i * cellSize;

        if (cellValue === 0) {
          ctx.fillStyle = 'white';

        } else if (cellValue === 1) {
          ctx.fillStyle = '#ABEED7';
        } else if (cellValue === 3) {
          ctx.drawImage(this.img, this.imageX, this.imageY, cellSize, cellSize);

        } else if (cellValue === 2) {

          const img = new Image();
          img.src = 'ice-cream.jpeg'
          img.onload = function () {
            ctx.drawImage(img, x, y, cellSize, cellSize);
          };
          // debugger
        } else {

          const img = new Image();
          img.src = 'oldman.jpeg'
          img.classList.add('oldman')
          img.onload = function () {
            ctx.drawImage(img, x, y, cellSize, cellSize);
          };
        }
        ctx.fillRect(x, y, cellSize, cellSize);

      }
    }
  };


  moveElement(event) {
    event.preventDefault();
    const ctx = this.canvas.getContext('2d');
    const speed = 10;

    if (event.key === 'ArrowLeft') {
      this.imageX -= speed;
    } else if (event.key === 'ArrowRight') {
      this.imageX += speed;
    } else if (event.key === 'ArrowUp') {
      this.imageY -= speed;
    } else if (event.key === 'ArrowDown') {
      this.imageY += speed;
    }

    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    ctx.drawImage(this.img, this.imageX, this.imageY, 40, 40);
    this.createMap();
  }
}


export default Map;



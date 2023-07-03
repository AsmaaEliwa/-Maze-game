
class Map {
  constructor(canvas) {
    this.canvas = canvas;
    this.map=[
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
    this.createMap = this.createMap.bind(this);
    this.moveElement = this.moveElement.bind(this);

    this.img = new Image();
    this.img.src = '1.webp';
    this.imageX = 160;
    this.imageY = 0;
    this.startTime = null;
    this.animationFrame = null;
    this.createMap();
    this.img.onload = this.handleImageLoad.bind(this);
    document.addEventListener('keydown',(event)=> this.moveElement(event));
   
    // document.addEventListener('keydown', handleAnimationFrame);

  }
  startAnimation() {
    this.startTime = performance.now();
    this.moveElement();
  };
  stopAnimation() {
    cancelAnimationFrame(this.animationFrame);
  };

  handleImageLoad() {
    this.createMap();
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
    let validMove=false;
    const ctx = this.canvas.getContext('2d');
    const speed = 40;

    if (event.key === 'ArrowLeft') {
      this.imageX -= speed;
        if (this.map[Math.floor(this.imageY/40)][Math.floor(this.imageX/40)]=== 0){
          validMove=true
        }else{
        this.imageX += speed;
        }
    } else if (event.key === 'ArrowRight') {
      this.imageX += speed;
        if (this.map[Math.floor(this.imageY/40)][Math.floor(this.imageX/40)]=== 0){
          validMove=true
        }else{
        this.imageX -= speed;
        }
    } else if (event.key === 'ArrowUp') {
      this.imageY -= speed;
        if (this.map[Math.floor(this.imageY/40)][Math.floor(this.imageX/40)]=== 0){
          validMove=true
        }else{
        this.imageY += speed;
        }
    } else if (event.key === 'ArrowDown') {
      this.imageY += speed;
        if (this.map[Math.floor(this.imageY/40)][Math.floor(this.imageX/40)]=== 0){
          validMove=true
        }else{
        this.imageY -= speed;
        }
    }

// if (this.map[Math.floor(this.imageX/40)][Math.floor(this.imageY/40)]=== 0){
  // debugger
if (validMove===true){
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.createMap();
    ctx.drawImage(this.img, this.imageX, this.imageY, 40, 40);
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



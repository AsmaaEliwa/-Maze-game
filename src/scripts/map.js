
class Map {
    constructor(canvas) {
        this.canvas = canvas;
        this.createMap = this.createMap.bind(this);
        this.moveElement = this.moveElement.bind(this);
        this.img = new Image();
        this.img.src = '1.webp';
        this.img.onload = this.handleImageLoad.bind(this);
        this.imageX = 160;
        this.imageY = 0;
        this.createMap();
        document.addEventListener('keydown', this.moveElement);

    }


    handleImageLoad() {
        this.createMap();
      }
    createMap() {
        const mapcontainer = this.canvas
        //1 => wall //0=> path// 3=>target //2 =>start point
        let map = [
            [1, 1, 1, 1, 3, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
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
                    // debugger
                        ctx.drawImage(this.img, this.imageX,this.imageY, cellSize, cellSize);
             
                    }
                ctx.fillRect(x, y, cellSize, cellSize);

            }}};
           
        
              moveElement(event){
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
                // ctx.drawImage(this.img, this.imageX, this.imageY, 40, 40);
                this.createMap();
            }
        }
        

export default Map;



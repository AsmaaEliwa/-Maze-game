
class Map {
    constructor(canvas) {
        this.canvas = canvas;
        this.createMap = this.createMap.bind(this);

        this.createMap();


    }
    createMap() {


        const mapcontainer = this.canvas
        //1 => wall
        //0=> path
        // 3=>target 
        //2 =>start point
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
                 
        const img = new Image(); // Create new img element
        img.addEventListener(
            "load",
            () => {
                ctx.drawImage(img, x, y,40,40); // execute drawImage statements here
            },
            false
        );
        img.src = "1.webp"; // Set source path

                    // ctx.fillStyle =  'green' ;
                }

                ctx.fillRect(x, y, cellSize, cellSize);








            }
        }

    }





}




export default Map;



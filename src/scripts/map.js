class Map {
    constructor(canvas) {
        this.canvas = canvas;
        this.createMap = this.createMap.bind(this);
      
        this.createMap();


    }
    createMap(){

        
        const mapcontainer = this.canvas
        //1 => wall
        //0=> path
        // 3=>target 
        //2 =>start point
       let map = [
            [1, 2, 1, 1, 1, 1, 1, 1, 1, 1,0,1.0,1,1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 3,0,1,1,0,1],
            [1, 0, 1, 0, 1, 0, 1, 1, 0, 1,0,1,0,1,1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1,0,1,0,1,1],
            [1, 0, 1, 1, 1, 1, 1, 1, 0, 1,0,1,1,2,1],
            [1, 0, 0, 0, 0, 0, 0, 1, 0, 1,0,1,0,1,1],
            [1, 0, 1, 1, 1, 1, 0, 1, 0, 1,0,1,1,1,1],
            [1, 0, 0, 0, 0, 1, 0, 0, 0, 1,0,1,0,0,1],
            [1, 0, 0, 0, 0, 1, 0, 0, 0, 1,0,1,1,0,1],
            [1, 0, 0, 0, 0, 1, 0, 0, 0, 1,0,1,1,1,1],
            [1, 0, 0, 0, 0, 1, 0, 0, 0, 1,0,1,0,1,1],
            [1, 0, 0, 0, 0, 1, 0, 0, 0, 1,0,1,1,0,1],
            [1, 0, 0, 0, 0, 1, 0, 0, 0, 1,0,1,1,1,1],
            [1, 1, 1, 1, 0, 1, 1, 1, 1, 1,1,0,1,1,1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1,1,0,1,1]
          ];
            const ctx = this.canvas.getContext('2d');
          const cellSize=40;
          for (let i = 0; i <= 15; i++) {
            for (let j = 0; j < 15; j++) {
                const cellValue = map[i][j];

                const x = j * cellSize;
                const y = i * cellSize;
        
                if (cellValue===0){
                    ctx.fillStyle =  '#DADFE4' ;

                }else if (cellValue===1){
                    ctx.fillStyle =  '#B7C1C9' ;
                }else{
                    ctx.fillStyle =  'green' ;
                }

                ctx.fillRect(x, y, cellSize, cellSize);








            }
          }

    }

  



    }




export default Map;



class Map{
    constructor(canvas){
        this.canvas=canvas;
        this.createMap = this.createMap.bind(this); 
        this.createMap();

    }

       createMap(){
        //    debugger
        if (this.canvas.getContext) {

            const ctx = this.canvas.getContext("2d");

           
            ctx.fillStyle = "green";
            ctx.fillRect(500, 500, 100, 100);

           
            ctx.strokeStyle = "blue";
            ctx.lineWidth = 5;
            ctx.beginPath();
            ctx.moveTo(200, 50);
            ctx.lineTo(300, 150);
            ctx.stroke();

        
            ctx.font = "20px Arial";
            ctx.fillStyle = "green";
            ctx.fillText("Hello, Canvas!", 200, 200);
        }
}
       
}

export default Map;

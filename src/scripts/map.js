class Map{
    constructor(canvas){
        this.canvas=canvas;
        this.createMap = this.createMap.bind(this); 
        createMap();

    }

       createMap(){
        if (this.canvas.getContext) {

            const ctx = this.canvas.getContext("2d");

           
            ctx.fillStyle = "green";
            ctx.fillRect(500, 500, 100, 100);

            // Draw a line
            ctx.strokeStyle = "blue";
            ctx.lineWidth = 5;
            ctx.beginPath();
            ctx.moveTo(200, 50);
            ctx.lineTo(300, 150);
            ctx.stroke();

            // Draw text
            ctx.font = "20px Arial";
            ctx.fillStyle = "green";
            ctx.fillText("Hello, Canvas!", 200, 200);
        }
}
       
}

export default Map;

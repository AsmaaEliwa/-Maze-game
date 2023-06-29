class Map {
    constructor(canvas) {
        this.canvas = canvas;
        this.createMap = this.createMap.bind(this);
        this.createMap();

    }

    createMap() {

        window.addEventListener('load', () => {

            const ctx = this.canvas.getContext('2d');

            // Calculate the center position of the window
            // const centerX = window.innerWidth / 2;
            // const centerY = window.innerHeight / 2;

            // Set the desired size of the rectangle
            const rectWidth = 600;
            const rectHeight = 600;

            // Calculate the top-left coordinates of the rectangle to center it
            // const rectX = centerX - rectWidth / 2;
            // const rectY = centerY - rectHeight / 2;

            // Draw the centered rectangle on the canvas
            ctx.fillStyle = 'green';
            ctx.fillRect(0, 0, 800, 800);
        });




    }
}



export default Map;

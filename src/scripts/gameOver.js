class GameOver{
    constructor(){
this.gameOver=this.gameOver.bind(this);
    }

gameOver(){
    const canvas= document.getElementById('mapCanvas');
    const ctx = canvas.getContext('2d');
    ctx.font = '100px Arial'; // Set the font size and family
    ctx.fillStyle = 'red'; // Set the fill color
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowColor = 'rgba(0, 0, 0, 5)';
    ctx.fillText('Game Over!', 300, 300);
}



}
export default GameOver;
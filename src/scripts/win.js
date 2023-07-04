class Win{
    constructor(){
this.gamewin=this.gamewin.bind(this);
    }

gamewin(){
    const canvas= document.getElementById('mapCanvas');
    const ctx = canvas.getContext('2d');
    ctx.font = '100px Arial'; // Set the font size and family
    ctx.fillStyle = 'green'; // Set the fill color
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowColor = 'rgba(0, 0, 0, 5)';
    ctx.fillText('you win :)', 300, 300);
}



}
export default Win;
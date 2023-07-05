// import Example from "./example";
class GameOver{
    constructor(){
this.gameOver=this.gameOver.bind(this);
this.offMusic=this.offMusic.bind(this)

    }

gameOver(){
    const main= document.getElementById('main');
    const over=document.createElement('div')
    over.classList.add('over')
    main.appendChild(over)
    this.offMusic()
    return;
}
offMusic(){
    const gameMusic = document.getElementById('gameMusic');
    gameMusic.pause();
  }


}
export default GameOver;
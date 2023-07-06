// import Example from "./example";
class GameOver{
    constructor(timerId){
this.gameOver=this.gameOver.bind(this);
this.offMusic=this.offMusic.bind(this)
this.timerId=timerId;

    }

gameOver(){
    const main= document.getElementById('main');
    const over=document.createElement('div')
    over.classList.add('over')
    // over.innerText='i want my ice cream :('
    main.appendChild(over)
    // this.offMusic()
    clearInterval(this.timerId);

    return;
}
offMusic(){
    const gameMusic = document.getElementById('gameMusic');
    // if (!gameMusic){

    }

    // gameMusic.pause();
//   }


}
export default GameOver;
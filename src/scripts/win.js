import Timer from "./timer";
class Win{
    constructor(timerId){
this.gamewin=this.gamewin.bind(this);
this.offMusic=this.offMusic.bind(this);
this.timerId=timerId;

    }

gamewin(){
    const main= document.getElementById('main');
    const win=document.createElement('div');
    // win.innerText="yummy :)"
    win.classList.add('win');
    main.appendChild(win);
    this.offMusic(); 

    clearInterval(this.timerId);
 

}

offMusic(){
    const gameMusic = document.getElementById('gameMusic');
    gameMusic.pause();
  }

}
export default Win;
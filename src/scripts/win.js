class Win{
    constructor(){
this.gamewin=this.gamewin.bind(this);
    }

gamewin(){
    const main= document.getElementById('main');
    const win=document.createElement('div')
    win.classList.add('win')
    main.appendChild(win)
}



}
export default Win;
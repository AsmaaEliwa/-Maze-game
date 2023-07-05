import Win from './win'
import Map from './map'
import Timer from './timer';
class Example {
    constructor(ele) {
        this.ele = ele;
        this.pausebutton = this.pausebutton.bind(this); 
        this.mutebutton = this.mutebutton.bind(this); 
        this.offMusic=this.offMusic.bind(this)
        this.play = this.play.bind(this); 
        this.pausebutton();
        this.mutebutton();
        this.restartbutton();
        this.play();
        this.side()
        this.timer = new Timer();
        const hOne = document.getElementById("gameName");
        hOne.addEventListener('click',this.hideSide);

    }
side(){
 const side= document.getElementsByClassName('side')[0];
 const header=document.createElement('h2');
 header.textContent='hello';
 const instructions=document.createElement('p')
 instructions.textContent='your goal is to navigate through the maze and reach the goal, uncovering secret passages, and evading cunning obstacles. Be prepared to encounter devious traps, and intelligent adversaries who will stop at nothing to hinder your progress. Use your wit and strategy to outsmart them and find your way to the goal.';
 side.appendChild(header);
 side.appendChild(instructions);

}

    play(){
      window.addEventListener('load', () => { 
          const buttonContainer = this.ele
          const button = document.createElement('button');
          button.classList.add('play');
          button.addEventListener('click',() =>{
          const time = document.getElementById('time');
            time.classList.add('time1');
            this.timer.startTimer(); 
          })
          button.addEventListener('click',this.onMusic)
          buttonContainer.appendChild(button);
          button.addEventListener('click',() =>{
            const side=document.getElementsByClassName('side')[0];
            // debugger
              side.classList.add('hidden') ;
            })
            button.addEventListener('click',() =>{
              const side=document.getElementsByClassName('over')[0];
              // debugger
                side.classList.add('hidden') ;
              })
            button.addEventListener('click',()=>{
              const canvas = document.getElementById("mapCanvas");
              new Map (canvas);
              
          })
          
        });
    
    }

    onMusic(){
      const gameMusic = document.getElementById('gameMusic');
      gameMusic.play();
    }
    offMusic(){
      const gameMusic = document.getElementById('gameMusic');
      gameMusic.pause();
    }
      hideSide(){
        const side= document.getElementsByClassName('side')[0];
        // const container=this.side
       const header=document.createElement('h2');
      header.textContent = 'Hello, World!';
      header.classList.add('header');
      // container.appendChild(header);
        side.classList.toggle('hidden');
      }
pausebutton(){
    window.addEventListener('load', () => {
        const buttonContainer = this.ele
        const button = document.createElement('button');
        button.classList.add('pause-button');

        button.addEventListener('click', () => {
          this.timer.pauseTimer()
        });

        buttonContainer.appendChild(button);
      });

}
mutebutton(){
  window.addEventListener('load', () => {
      const buttonContainer = this.ele
      const button = document.createElement('button');
      button.classList.add('mute-button');
      button.addEventListener('click', this.offMusic)
      buttonContainer.appendChild(button);
    });

}
restartbutton(){
  window.addEventListener('load', () => {
      const buttonContainer = this.ele

    
      // Create a button element
      const button = document.createElement('button');
      button.classList.add('restart-button');
    
      button.addEventListener('click',() =>{
        const time = document.getElementById('time');
          time.classList.add('time1')
          const timer = new Timer();
          timer.startTimer(); 
        })
        button.addEventListener('click',this.onMusic)
        buttonContainer.appendChild(button);
        button.addEventListener('click',() =>{
          const side=document.getElementsByClassName('side')[0];
          // debugger
            side.classList.add('hidden') ;
          })
          button.addEventListener('click',()=>{
            const canvas = document.getElementById("mapCanvas");
            new Map (canvas);

            
        })
      buttonContainer.appendChild(button);

    });
  
}






}

export default Example;



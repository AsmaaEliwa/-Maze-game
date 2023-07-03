import Timer from './timer'

class Example {
    constructor(ele) {
        this.ele = ele;
        this.pausebutton = this.pausebutton.bind(this); 
        this.mutebutton = this.mutebutton.bind(this); 
        this.play = this.play.bind(this); 
        this.pausebutton();
        this.mutebutton();
        this.restartbutton();
        this.play();
        this.side()
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
            time.classList.add('time1')
            const timer = new Timer();
            timer.startTimer(); 
          })
          button.addEventListener('click',this.onMusic)
          buttonContainer.appendChild(button);
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
          alert('Button clicked!');
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
    
      // Add event listener to the button
      button.addEventListener('click', () => {
        // Action to perform when the button is clicked
        alert('restarted!');
      });
    
      // Append the button to the container
      buttonContainer.appendChild(button);
    });

}


}

export default Example;



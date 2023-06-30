class Example {
    constructor(ele) {
        this.ele = ele;
        this.pausebutton = this.pausebutton.bind(this); 
        this.pausebutton();
        this.mutebutton()
        this.restartbutton()
    }
pausebutton(){
    window.addEventListener('load', () => {
        const buttonContainer = this.ele

      
        // Create a button element
        const button = document.createElement('button');
        button.classList.add('pause-button');
      
        // Add event listener to the button
        button.addEventListener('click', () => {
          // Action to perform when the button is clicked
          alert('Button clicked!');
        });
      
        // Append the button to the container
        buttonContainer.appendChild(button);
      });

}
mutebutton(){
  window.addEventListener('load', () => {
      const buttonContainer = this.ele

    
      // Create a button element
      const button = document.createElement('button');
      button.classList.add('mute-button');
    
      // Add event listener to the button
      button.addEventListener('click', () => {
        // Action to perform when the button is clicked
        alert('muted!');
      });
    
      // Append the button to the container
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
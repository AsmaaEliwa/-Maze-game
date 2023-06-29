class Example {
    constructor(ele) {
        this.ele = ele;
        // this.pausebutton = this.pausebutton.bind(this); 
        // this.pausebutton()
    }
pausebutton(){
    window.addEventListener('load', () => {
        const buttonContainer = this.ele

      
        // Create a button element
        const button = document.createElement('button');
        button.classList.add('button');
      
        // Add event listener to the button
        button.addEventListener('click', () => {
          // Action to perform when the button is clicked
          alert('Button clicked!');
        });
      
        // Append the button to the container
        buttonContainer.appendChild(button);
      });

}

}

export default Example;
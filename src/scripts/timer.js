class Timer {
    constructor() {
      this.remainingSeconds = 60;
      this.timerElement = document.getElementById('time');
      this.timerId = null;
    }
  
    startTimer() {
      this.timerId = setInterval(() => {
        this.remainingSeconds--;
        this.timerElement.textContent = `Timer: ${this.remainingSeconds} seconds`;
  
        if (this.remainingSeconds === 0) {
          this.stopTimer();
          alert('Time is up!');
        }
      }, 1000);
    }
  
    stopTimer() {
      clearInterval(this.timerId);
    }
  }

export default Timer;




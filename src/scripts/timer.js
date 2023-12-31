import Map from './map'
import GameOver from './gameOver';
class Timer {
    constructor() {
      this.remainingSeconds = 15;
      this.timerElement = document.getElementById('time')
      this.timerId = null;
     
    
    }
  
    startTimer() {
      this.timerId = setInterval(() => {
        this.remainingSeconds--;
        // debugger

        this.timerElement.textContent = `Timer: ${this.remainingSeconds} seconds`;
        if ((this.remainingSeconds === 0) ){
          this.stopTimer();
          const game = new GameOver(this.timerId);
          debugger;
          game.gameOver();}
          return;
      }, 1000);
      return this.timerId;
    }
    stopTimer() {
      clearInterval(this.timerId);
    }
    pauseTimer() {
      if (this.paused) {
        return; // Timer is already paused
      }
  
      this.paused = true;
      this.pauseTime = Date.now();
      clearInterval(this.timerId);
    }
  
    resumeTimer() {
      if (!this.paused) {
        return; // Timer is not paused
      }
  
      this.paused = false;
      this.pauseDuration += Date.now() - this.pauseTime;
      this.timerId = setInterval(() => {
        this.remainingSeconds--;
        this.timerElement.textContent = `Timer: ${this.remainingSeconds} seconds`;
        if (this.remainingSeconds === 0 && !(Map.imageX === 520 && Map.imageY === 40)) {
          this.stopTimer();
          debugger;
          const game = new GameOver();
          game.gameOver();
        }
      }, 1000);
    }
  
  
  }
 
  
  
  

export default Timer;




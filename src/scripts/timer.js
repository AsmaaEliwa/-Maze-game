import Map from './map'
import GameOver from './gameOver';
class Timer {
    constructor() {
      this.remainingSeconds = 10;
      this.timerElement = document.getElementById('time');
      this.timerId = null;
    }
  
    startTimer() {
      this.timerId = setInterval(() => {
        this.remainingSeconds--;
        this.timerElement.textContent = `Timer: ${this.remainingSeconds} seconds`;
        if (this.remainingSeconds === 0 && !(Map.imageX ===520 && Map.imageY===40)) {
          this.stopTimer();
          const game = new GameOver();
          game.gameOver();

        }
      }, 1000);
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
          const game = new GameOver();
          game.gameOver();
        }
      }, 1000);
    }
  
    stopTimer() {
      clearInterval(this.timerId);
    }
  }
 
  
  
  

export default Timer;




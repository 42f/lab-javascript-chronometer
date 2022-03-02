class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.startingTime = Date.now();
    this.currentTime = 0;
    this.intervalId = setInterval(() => {
      this.getMsElapsed();
      if (callback) {
        callback();
      }
    }, 1);
  }

  getMsElapsed() {
    this.currentTime = Date.now() - this.startingTime;
    return this.currentTime;
  }

  getMinutes() {
    return Math.floor(this.getMsElapsed() / 1000 / 60);
  }

  getSeconds() {
    return Math.floor((this.getMsElapsed() / 1000) % 60);
  }

  getMs() {
    return Math.floor(this.getMsElapsed() % 1000);
  }

  computeTwoDigitNumber(value) {
    return value.toString().padStart(2, '0');
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${minutes}:${seconds}`;
  }

  splitMs() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    const ms = this.computeTwoDigitNumber(this.getMs());
    return `${minutes}:${seconds}:${ms}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

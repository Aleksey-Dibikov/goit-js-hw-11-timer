class CountdownTimer {
  constructor(selector, targetDate) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.refs = {
      seconds: document.querySelector('[data-value="secs"]'),
      minutes: document.querySelector('[data-value="mins"]'),
      hours: document.querySelector('[data-value="hours"]'),
      days: document.querySelector('[data-value="days"]'),
    }    
  }

  calc = () => {
  const currentDate = Date.now();
  const time = this.targetDate - currentDate;

  const secs = Math.floor((time % (1000 * 60)) / 1000);
  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const days = Math.floor(time / (1000 * 60 * 60 * 24));

  this.refs.seconds.textContent = secs < 10 ? `0${secs}` : secs;
  this.refs.minutes.textContent = mins < 10 ? `0${mins}` : mins;
  this.refs.hours.textContent = hours < 10 ? `0${hours}` : hours;
  this.refs.days.textContent = days < 10 ? `0${days}` : days;
  }
  
  startTimer = () => {
  this.targetDate = new Date('Aug 31, 2021');
  setInterval(this.calc, 1000);
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Aug 31, 2021'),
});
window.addEventListener("DOMContentLoaded", timer.startTimer);

// const refs = {
//   selector: document.querySelector('#timer-1'),
//   seconds: document.querySelector('[data-value="secs"]'),
//   minutes: document.querySelector('[data-value="mins"]'),
//   hours: document.querySelector('[data-value="hours"]'),
//   days: document.querySelector('[data-value="days"]'),
// }

// function calc() {
//   const currentDate = Date.now();
//   const time = targetDate - currentDate;

//   const secs = Math.floor((time % (1000 * 60)) / 1000);
//   const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
//   const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   const days = Math.floor(time / (1000 * 60 * 60 * 24));

//   refs.seconds.textContent = secs;
//   refs.minutes.textContent = mins;
//   refs.hours.textContent = hours;
//   refs.days.textContent = days;
// }

// function startTimer() {
//   targetDate = new Date('Aug 31, 2021');
//   setInterval(calc, 1000);
// }

// refs.selector.addEventListener('click', startTimer);
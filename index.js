
window.addEventListener("DOMContentLoaded", () => {
  const deadline = "2024-02-05";

  function getTimeRemaining(endTime) {
    let days,hours,minutes,seconds;
    const t = Date.parse(endTime) - Date.parse(new Date());

      if(t <= 0) {
        days = 0;
        hours = 0;
        minutes = 0;
        seconds = 0;
      }
      else {
        days = Math.floor(t / (1000 * 60 * 60 * 24)),
        hours = Math.floor((t / (1000 * 60 * 60)) % 24),
        minutes = Math.floor((t / (1000 * 60)) % 60),
        seconds = Math.floor((t / 1000) % 60);
      }

    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  function addZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  function setClock(selector, endTime) {
    const timer = document.querySelector(selector),
      days = timer.querySelector("#days"),
      hours = timer.querySelector("#hours"),
      minutes = timer.querySelector("#minutes"),
      seconds = timer.querySelector("#seconds"),
      timeInterval = setInterval(timeUpdate, 1000);

    timeUpdate();

    function timeUpdate() {
      const t = getTimeRemaining(endTime);

      days.textContent = addZero(t.days);
      hours.textContent = addZero(t.hours);
      minutes.textContent = addZero(t.minutes);
      seconds.textContent = addZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock(".timer", deadline);
});

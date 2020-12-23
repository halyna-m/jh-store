const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const year = document.getElementById('year');
const loading = document.getElementById('loading');

const counterEndTime = new Date(`January 16 2021 00:00:00`);

function updateCountdown() {
  const currentTime = new Date();
  const diffSecs = counterEndTime - currentTime;
  const d = Math.floor(diffSecs / 1000 / 60 / 60 / 24);
  const h = Math.floor(diffSecs / 1000 / 60 / 60) % 24;
  const m = Math.floor(diffSecs / 1000 / 60) % 60;
  const s = Math.floor(diffSecs / 1000) % 60;
  days.innerHTML = d;
  hours.innerHTML = h < 10 ? '0' + h : h;
  minutes.innerHTML = m < 10 ? '0' + m : m;
  seconds.innerHTML = s < 10 ? '0' + s : s;
}



setInterval(updateCountdown, 1000);
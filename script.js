<!-- script.js -->
document.addEventListener('DOMContentLoaded', function () {
  setInterval(ojidanieNG, 1000);
});

function ojidanieNG() {
  var today = new Date();
  var BigDay = new Date(2024, 0, 1, 0, 0);
  var timeLeft = BigDay.getTime() - today.getTime();
  var daysLeft = Math.floor(timeLeft / (24 * 60 * 60 * 1000));
  var hrsLeft = Math.floor((timeLeft % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
  var minsLeft = Math.floor((timeLeft % (60 * 60 * 1000)) / (60 * 1000));
  var secsLeft = Math.floor((timeLeft % (60 * 1000)) / 1000);

  var countdownText = daysLeft + ' дней, ' + hrsLeft + ' часов, ' + minsLeft + ' минут, ' + secsLeft + ' секунд';

  if (timeLeft > 0) {
    document.getElementById('timer').innerText = countdownText;
  } else {
    document.getElementById('timer').innerHTML = '<b>Поздравляем с Новым 2024 годом!!!</b>';
  }
}

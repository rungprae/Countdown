let futureTime = new Date("nov 15, 2021 15:59:00").getTime();

function format(number) {
  return (number + "").padStart(2, "0");
}

function countdownfn() {
  let nowDate = Date.now();
  let millisec = futureTime - nowDate;

  let days = Math.floor(millisec / (1000 * 60 * 60 * 24));
  let hours = Math.floor((millisec % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((millisec % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((millisec % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = format(days);
  document.querySelector(".hours").innerHTML = format(hours);
  document.querySelector(".minutes").innerHTML = format(minutes);
  document.querySelector(".seconds").innerHTML = format(seconds);
}


countdownfn();

let countDown = setInterval(function () {
  countdownfn();
}, 1000);

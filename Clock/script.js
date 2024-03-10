const hourHand = document.querySelector(".hour");
const minuteHand = document.querySelector(".minute");
const secHand = document.querySelector(".second");

function setSec() {
  const hand = new Date();
  const second = hand.getSeconds();
  const secondDegree = (second / 60) * 360 + 90;
  secHand.style.transform = `rotate(${secondDegree}deg)`;

  const minutes = hand.getMinutes();
  const minuteDegree = (minutes / 60) * 360 + 90;
  minuteHand.style.transform = `rotate(${minuteDegree}deg)`;

  const hour = hand.getHours();
  const hourDegree = (hour / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;
}

setInterval(setSec, 1000);

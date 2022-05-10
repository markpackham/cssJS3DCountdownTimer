const countToDate = new Date().setHours(new Date().getHours() + 24);
let previouseTimeBetweenDates;

setInterval(() => {
  currentDate = new Date();
  const timeBetweenDates = Math.ceil((countToDate - currentDate) / 1000);
  if (previouseTimeBetweenDates !== timeBetweenDates) {
    flipAllCards(timeBetweenDates);
  }

  previouseTimeBetweenDates = timeBetweenDates;
}, 250);

function flipAllCards(time) {
  const seconds = time % 60;
  const minutes = Math.floor(time / 60) % 60;
  const hours = Math.floor(time / 3600);

  const hoursTens = docucument.querySelector("[data-hours-tens]");
  const hoursOnes = docucument.querySelector("[data-hours-ones]");
  const minutesTens = docucument.querySelector("[data-minutes-tens]");
  const minutesOnes = docucument.querySelector("[data-minutes-ones]");
  const secondsTens = docucument.querySelector("[data-seconds-tens]");
  const secondsOnes = docucument.querySelector("[data-seconds-ones]");
}

function flip(flipCard) {
  const topHalf = flipCard.querySelector(".top");
  const bottomHalf = flipCard.querySelector(".bottom");
  const topFlip = document.createElement("div");
  topFlip.classList.add("top-flip");
  const bottomFlip = document.createElement("div");
  bottomFlip.classList.add("bottom-flip");
  const startNumber = parseInt(topHalf.textContent);

  topHalf.textContent = startNumber;
  bottomHalf.textContent = startNumber;
  topFlip.textContent = startNumber;
  bottomFlip.textContent = startNumber - 1;

  topFlip.addEventListener("animationstart", (e) => {
    topHalf.textContent = startNumber - 1;
  });

  topFlip.addEventListener("animationend", (e) => {
    topFlip.remove();
  });

  bottomFlip.addEventListener("animationend", (e) => {
    bottomHalf.textContent = startNumber - 1;
    bottomFlip.remove();
    if (startNumber > 1) {
      flip(flipCard);
    }
  });

  flipCard.append(topFlip, bottomFlip);
}

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

  flip(document.querySelector("[data-hours-tens]"));
  flip(document.querySelector("[data-hours-ones]"));
  flip(document.querySelector("[data-minutes-tens]"));
  flip(document.querySelector("[data-minutes-ones]"));
  flip(document.querySelector("[data-seconds-tens]"), Math.floor(seconds / 10));
  flip(document.querySelector("[data-seconds-ones]"), seconds % 10);
}

function flip(flipCard, newNumber) {
  const topHalf = flipCard.querySelector(".top");
  const startNumber = parseInt(topHalf.textContent);

  if (newNumber === startNumber) {
    return;
  }

  const bottomHalf = flipCard.querySelector(".bottom");
  const topFlip = document.createElement("div");
  topFlip.classList.add("top-flip");
  const bottomFlip = document.createElement("div");
  bottomFlip.classList.add("bottom-flip");

  topHalf.textContent = startNumber;
  bottomHalf.textContent = startNumber;
  topFlip.textContent = startNumber;
  bottomFlip.textContent = newNumber;

  topFlip.addEventListener("animationstart", (e) => {
    topHalf.textContent = newNumber;
  });

  topFlip.addEventListener("animationend", (e) => {
    topFlip.remove();
  });

  bottomFlip.addEventListener("animationend", (e) => {
    bottomHalf.textContent = newNumber;
    bottomFlip.remove();
    if (startNumber > 1) {
      flip(flipCard);
    }
  });

  flipCard.append(topFlip, bottomFlip);
}

const flipCard = document.querySelector(".flip-card");

flip(flipCard);

const countToDate = new Date("2022-04-02");
setInterval(() => {}, 1000);

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

const container = document.querySelector(".center-container");
const coin = document.querySelector(".coin");
const scoreDisplay = document.querySelector("#coin-counter");
const pageTitle = document.querySelector("title");

var score = localStorage.getItem("score9785") || 0;
var numberOfFallingCoins = 0;

scoreDisplay.innerHTML = `${score} Coins`;
pageTitle.innerHTML = `${score} coins -  Coin Clicker`;

coin.addEventListener("click", () => {
  score++;
  scoreDisplay.innerHTML = `${score} Coins`;
  pageTitle.innerHTML = `${score} coins -  Coin Clicker`;
  window.localStorage.setItem("score9785", score);
  let clientX = event.clientX;
  let clientY = event.clientY;
  let sparkle = document.createElement("div");
  sparkle.innerHTML = "+1";
  sparkle.classList.add("click-effect");
  let randomPos = Math.floor(Math.random() * 20) - 10;
  //   console.log(randomPos);  //random position between -10 and 10
  sparkle.style.left = clientX + randomPos + "px";
  sparkle.style.top = clientY + "px";
  document.body.appendChild(sparkle);
  if (numberOfFallingCoins < 30) {
    numberOfFallingCoins++;
    let fallingCoin = document.createElement("div");
    fallingCoin.classList.add("falling-coins");
    fallingCoin.style.left = Math.floor(Math.random() * 100) + "%";
    container.appendChild(fallingCoin);
    setTimeout(() => {
      fallingCoin.remove();
      numberOfFallingCoins--;
    }, 1200);
  }
  setTimeout(() => {
    sparkle.remove();
  }, 2500);
});

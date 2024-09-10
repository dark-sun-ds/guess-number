"use strict";
let score = 20;
let highestScore = 0;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
const guessInput = document.getElementById("guess");
const checkButton = document.getElementById("check");
const message = document.getElementById("message");
const result = document.getElementById("result");
const scoreEl = document.getElementById("score");
const highscoreEl = document.getElementById("highscore");
const bodyEl = document.querySelector("body");
const whiteBlock = document.querySelector(".answer-white-block");
const againButton = document.getElementById("again-btn");

againButton.addEventListener("click", () => {
  score = 20;
  scoreEl.textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  result.textContent = "?";
  message.textContent = "Start guessing...";
  guessInput.value = "";
  bodyEl.style.backgroundColor = "#201f20";
  whiteBlock.style.width = "170px";
});

const check = () => {
      const guess = Number(guessInput.value);

      //no input
      if (!guess) {
        message.textContent = "🚫 Not a number";

        //player wins
      } else if (guess === secretNumber) {
        result.textContent = secretNumber;
        message.textContent = "✔️ Correct Number!";
        bodyEl.style.backgroundColor = "#60b347";
        whiteBlock.style.width = "20rem";
        if (score > highestScore) {
          highestScore = score;
          highscoreEl.textContent = highestScore;
        }

        //guess is too high
      } else if (guess > secretNumber) {
        showMessage("📈 Too High!");

        //guess is too low
      } else if (guess < secretNumber) {
        showMessage("📉 Too Low!");
      }
};

const showMessage = (output) => {
  if (score > 1) {
    message.textContent = output;
    increaseScore();
  } else {
    increaseScore();
    message.textContent = "🥺You are lose!🥀";
  }
};

const increaseScore = () => {
  score--;
  scoreEl.textContent = score;
};

checkButton.addEventListener("click", check);
guessInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    check();
  }
});

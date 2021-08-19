const p1Btn = document.querySelector("#p1Btn");
const p2Btn = document.querySelector("#p2Btn");
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;

p1Btn.addEventListener("click", function () {
  if (p1Score !== winningScore) {
    p1Score += 1;
    p1Display.textContent = p1Score;
  }
});

p2Btn.addEventListener("click", function () {
  if (p2Score !== winningScore) {
    p2Score += 1;
    p2Display.textContent = p2Score;
  }
});

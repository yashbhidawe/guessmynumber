`Use Strict`;
let secretNumber = document.querySelector(".number");
secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
document.querySelector(`.check`).addEventListener(`click`, function () {
  let guess = Number(document.querySelector(`.guess`).value);
  console.log(typeof guess);
  if (!guess) {
    message(`khali nhi chhod sakte humko!`);
  } else if (guess < secretNumber) {
    message(`thoda aur... thoda aur`);
    score--;
    document.querySelector(".score").textContent = score;
  } else if (guess > secretNumber) {
    message(`bhai saab kuchh jyada nhi ho gaya ye`);
    score--;
    document.querySelector(".score").textContent = score;
  } else if (guess === secretNumber) {
    message(`waah bete moj kardi, ye le tere 7 crore`);
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "green";

    if (score > highScore) {
      highScore = score;
      document.querySelector(`.highscore`).textContent = highScore;
    }
  }
  if (score === 0) message(`Nikal Lawade Haar Gaya Tu 😂😂`);
});
let againBtn = document.querySelector(".again");
againBtn.addEventListener("click", function () {
  // againBtn.textContent = 'hello bsdk';
  message(`Chal bhai guess kr kya ho sakta number?`);
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";

  document.querySelector(".guess").value = ``;
  document.querySelector("body").style.backgroundColor = "#222";
});
function message(string) {
  document.querySelector(".message").textContent = string;
}

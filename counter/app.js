const counter = document.querySelector(".counter");
const btns = document.querySelectorAll(".btn");
let count = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.classList.contains("inc")) {
      count++;
      counter.style.color = "green";
    } else if (e.target.classList.contains("dec")) {
      count--;
      counter.style.color = "red";
    } else {
      count = 0;
      counter.style.color = "gray";
    }
    counter.textContent = count;
  });
});

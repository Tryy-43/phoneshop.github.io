const list = document.querySelector(".list");
const ulList = document.querySelector(".ul-list");
const allList = document.querySelectorAll(".list-item");
const btn = document.querySelectorAll(".btn");
ulList.addEventListener("click", (e) => {
  const btnTarget = e.target.classList.contains("list-item");
  allList.forEach((p) => {
    if (btnTarget) {
      p.classList.remove("active");
      e.target.classList.add("active");
    }
  });
});
$(document).on("click", "#dropdown", function () {
  $(".moldel").slideToggle(1000);
});
$(document).on("click", "#dropdown", function () {
  $("#icon").toggleClass("fa-chevron-up fa-chevron-down");
});
$(document).on("click", ".btn-down", function () {
  $(".list").slideToggle(1000);
});
$(document).on("click", ".btn-down", function () {
  $("#btn").toggleClass("fa-times fa-bars");
});
const imags = document.querySelectorAll(".img-wrapper > img");
const btnPre = document.querySelector("#prevous");
const btnNext = document.querySelector("#next");
const allDots = document.querySelectorAll(".dot");
var counter = 0;
btnNext.addEventListener("click", nextSlide);
function nextSlide() {
  imags[counter].style.animation = "nextOut .5s forwards";
  if (counter >= imags.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
  imags[counter].style.animation = "nextIn .5s forwards";
  dotPoint();
}
btnPre.addEventListener("click", preSlide);
function preSlide() {
  imags[counter].style.animation = "prevOut .5s forwards";
  if (counter <= 0) {
    counter = imags.length - 1;
  } else {
    counter--;
  }
  imags[counter].style.animation = "prevIn .5s forwards";
  dotPoint();
}
const cot = document.querySelector(".slider");
function auto() {
  deleteInterval = setInterval(function () {
    nextSlide();
  }, 1000);
}
auto();
cot.addEventListener("mouseover", function () {
  clearInterval(deleteInterval);
});
cot.addEventListener("mouseleave", function () {
  auto();
});
function dotPoint() {
  for (let i = 0; i < allDots.length; i++) {
    allDots[i].className = allDots[i].className.replace("active-dot", "");
  }
  allDots[counter].className += " active-dot";
}
dotPoint();

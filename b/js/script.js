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

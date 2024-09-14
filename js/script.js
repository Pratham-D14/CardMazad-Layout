$(document).ready(function () {
  $("#option-bid").ionRangeSlider({
    type: "double",
    skin: "round",
    color: "black",
    decorate_both: true,
    min: 0,
    max: 10000,
    prefix: "$",
    max_postfix: "+",
  });
});

// Toggling card
document.querySelectorAll(".card__button").forEach((expand, index) => {
  expand.addEventListener("click", () => {
    const prevBids = document.querySelectorAll(".card__expand")[index];
    prevBids.classList.toggle("active");
    prevBids.classList.toggle("unactive");
  });

  expand.addEventListener("click", () => {
    const prevBids = document.querySelectorAll(".chevron-img-green")[index];
    prevBids.classList.toggle("active");
  });
});

// Toggling Button
document.querySelectorAll(".card__button").forEach((expand, index) => {
  expand.addEventListener("click", () => {
    const prevBids = document.querySelectorAll(".card__button")[index];
    prevBids.classList.toggle("view-more");
  });
});

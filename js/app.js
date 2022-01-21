const day1 = new Date('2022-01-01');
// const today = new Date();
const today = new Date('2022-01-29');
const thisDay = Math.floor((today.getTime() - day1.getTime()) / 86400000) + 1;
const thisWeek = Math.ceil(thisDay / 7);
console.log(thisWeek);

document.addEventListener('DOMContentLoaded', function(event) {

  // Show teasers based on date
  const weekTeasers = document.querySelectorAll("[data-show-week]");

  weekTeasers.forEach(function(el, index) {

    if (thisWeek >= parseFloat(el.dataset.showWeek)) {
      el.classList.remove("hidden");
    }

  });


  // Make week clickable based on date
  const recipeLinks = document.querySelectorAll("[data-link-week]");

  recipeLinks.forEach(function(el, index) {

    if (thisWeek >= parseFloat(el.dataset.linkWeek)) {
      el.classList.remove("disabled");
      el.href = "/recipes/week-" + el.dataset.linkWeek + "/";
    }

  });

});
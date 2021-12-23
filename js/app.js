document.addEventListener('DOMContentLoaded', function(event) {


  const weekTeasers = document.querySelectorAll("[data-show-week]");
  const day1 = new Date('2022-01-01');
  const today = new Date();

  weekTeasers.forEach(function(el, index) {
    let showOnWeek = el.dataset.showWeek;
    let showOnDay = (parseFloat(showOnWeek) * 7) - 7;
    let dateDiff = today.getTime() - day1.getTime();
    let daysSince = Math.ceil(dateDiff / (1000 * 3600 * 24));


    if (daysSince >= showOnDay) {
      el.classList.remove("hidden");
    }

  });
});
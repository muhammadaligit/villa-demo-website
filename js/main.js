const collaspsibles = document.querySelectorAll(".collapsible");
collaspsibles.forEach((item) => {
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  });
});

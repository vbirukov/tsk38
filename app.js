/**
 * Created by concisv on 25.12.2016.
 */

let elem = document.querySelector(".header_menu .nav:first-child .nav-item:first-child");



elem.addEventListener("mouseover", function () {
  let elem1 = document.querySelector(".dropdown_menu");
  elem1.style.display = 'block';
})

elem.addEventListener("mouseout", function () {
  let elem1 = document.querySelector(".dropdown_menu");
  elem1.style.display = 'none';
})
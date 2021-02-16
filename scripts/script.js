"use strict"

let viewport = document.getElementById("viewport").offsetWidth;
let btnNext = document.querySelector(".next");
let btnPrev = document.querySelector(".prev");
let slider = document.querySelector("div.slider");
let viewSlide = document.querySelectorAll(".viewSlide");
let viewSlider = document.querySelector('#viewSlider');

let Slide = 0;
let color1 = "rgb(219, 144, 58)";
let color2 = "#1C1C1C";

viewSlide[Slide].style.backgroundColor = color1;

btnNext.addEventListener("click", function () {
  viewSlide[Slide].style.backgroundColor = color2;
  if (Slide < 3) {
    Slide++;
  } else {
    Slide = 0;
  }
  viewSlide[Slide].style.backgroundColor = color1;
  slider.style.left = -Slide * viewport + "px";
});

btnPrev.addEventListener("click", function () {
  viewSlide[Slide].style.backgroundColor = color2;
  if (Slide > 0) {
    Slide--;
  } else {
    Slide = 3;
  }
  viewSlide[Slide].style.backgroundColor = color1;
  slider.style.left = -Slide * viewport + "px";
});

viewSlider.addEventListener('click', function (event) {
  if (event.target.classList.contains("viewSlide")) {
    viewSlide[Slide].style.backgroundColor = color2;
    let elem = event.target;
    elem.style.backgroundColor = color1;
    let currentNum = elem.dataset.num;
    Slide = currentNum;
    slider.style.left = -Slide * viewport + "px";
  }
})

// перестановка карты - начало
if (window.innerWidth <= 1000) {
  let map = document.querySelector('.map');
  let cont = document.querySelector('.block7__cont');
  cont.append(map);
}
// перестановка карты - конец

// Перестановка в хедере - начало
let first = document.querySelector('.first');
let second = document.querySelector('.second');
if (window.innerWidth <= 500) {
  first.classList.remove("hide");
  second.classList.add("hide");
}

let firstMenu = document.querySelector('.firstMenu');
let secondMenu = document.querySelector('.secondMenu');
if (window.innerWidth <= 1020) {
  firstMenu.classList.toggle("hide");
  secondMenu.classList.toggle("hide");
}
// Перестановка в хедере - конец

// прикрепление кнопки - начало
let phone = document.querySelector('.header__phone');
let a = document.querySelector('.change .submitBtn');

window.addEventListener('scroll', () => {
  if (window.pageYOffset >= 500) {
    phone.classList.add('hide');
    a.classList.remove('hide');
  } else {
    phone.classList.remove('hide');
    a.classList.add('hide');
  }
})
// прикрепление кнопки - конец


// Burger - start
const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.secondMenu');

function toggleMenuIcon() {
  menuIcon.classList.toggle('active');
  menu.classList.toggle('act');
}

menuIcon.addEventListener('click', toggleMenuIcon);
// Burger - end
"use strict";

const homeBtn = document.querySelector(".header__home");
const fotdBtn = document.querySelector(".header__fotd");
const fightersBtn = document.querySelector(".header__fighters");
const aboutBtn = document.querySelector(".header__about");
const moreBtn = document.querySelector(".main__arrow");
const mainSection = document.querySelector(".main");
const fotdSection = document.querySelector(".dayFight");
const fightersSection = document.querySelector(".videos");
const footerSection = document.querySelector(".footer");
const leftArrows = [...document.querySelectorAll(".leftArrow")];
const rightArrows = [...document.querySelectorAll(".rightArrow")];
const videosLists = [...document.querySelectorAll(".videos__list")];
const videosElementList = [...document.querySelectorAll(".videos__element")];

homeBtn.addEventListener("click", () => {
  mainSection.scrollIntoView({ behavior: "smooth" });
});
fotdBtn.addEventListener("click", () => {
  fotdSection.scrollIntoView({ behavior: "smooth" });
});
fightersBtn.addEventListener("click", () => {
  fightersSection.scrollIntoView({ behavior: "smooth" });
});
aboutBtn.addEventListener("click", () => {
  footerSection.scrollIntoView({ behavior: "smooth" });
});
moreBtn.addEventListener("click", () => {
  fotdSection.scrollIntoView({ behavior: "smooth" });
});

leftArrows.forEach(function (arrow, index) {
  arrow.addEventListener("click", function () {
    videosLists[index].scrollLeft -= 1500;
  });
});

rightArrows.forEach(function (arrow, index) {
  arrow.addEventListener("click", function () {
    videosLists[index].scrollLeft += 1500;
  });
});

videosElementList.forEach(function (el) {
  const playBtn = document.createElement("i");
  playBtn.classList.add("fas");
  playBtn.classList.add("fa-play-circle");
  playBtn.classList.add("playBtn");
  el.appendChild(playBtn);
});

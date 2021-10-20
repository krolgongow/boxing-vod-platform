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

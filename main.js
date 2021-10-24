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
const overlay = document.querySelector(".overlay");
const overlayVideo = document.querySelector(".overlay__video");
const iframeVideo = document.querySelector(".overlay__video iframe");
const leftArrows = [...document.querySelectorAll(".leftArrow")];
const rightArrows = [...document.querySelectorAll(".rightArrow")];
const videosLists = [...document.querySelectorAll(".videos__list")];
const videosElementList = [...document.querySelectorAll(".videos__element")];
let links;

const creatingPlayer = function () {
  videosElementList.forEach(function (el, index) {
    el.addEventListener("click", function () {
      iframeVideo.setAttribute(
        "src",
        `https://www.youtube-nocookie.com/embed/${links[index]}?autoplay=1`
      );
      overlay.classList.add("on");
      // overlayVideo.insertAdjacentHTML("beforeend", html);
    });
  });
};

const preparingLinks = function () {
  fetch("assets/links.json")
    .then((response) => response.json())
    .then((response) => (links = Object.values(response)))
    .then(creatingPlayer());
};

const cancelVideo = function () {
  overlay.classList.remove("on");
  iframeVideo.removeAttribute("src");
};

preparingLinks();

videosElementList.forEach(function (el) {
  const playBtn = document.createElement("i");
  playBtn.classList.add("fas");
  playBtn.classList.add("fa-play-circle");
  playBtn.classList.add("playBtn");
  el.appendChild(playBtn);
});

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
overlay.addEventListener("click", cancelVideo);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    cancelVideo();
  }
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

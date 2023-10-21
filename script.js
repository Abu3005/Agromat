"use strict";

// mode
const input = document.querySelector("#k");
const moder = document.querySelector(".mode");
const html = document.querySelector("html");
const icon = document.querySelector(".nav-logo");
const times = document.querySelector(".times");
const links = document.querySelectorAll(".side-link");
const head = document.querySelector(".head");
const over = document.querySelector(".over");
const body = document.querySelector(".body");
const disap = document.querySelectorAll(".disap");
const main = document.querySelector("main");
const progress = document.querySelector("#in-progress");

for (var i = 0; i < progress.length; i++) {
  progress[i].addEventListener("click", function () {
    over.classList.add("hidden");
    body.classList.add("all");
  });
}

icon.addEventListener("click", function () {
  over.classList.remove("hidden");
  over.classList.add("float-right");
  body.classList.add("blurer");
});

times.addEventListener("click", function () {
  over.classList.add("hidden");
  over.classList.remove("float-right");
  body.classList.remove("blurer");
});
main.addEventListener("click", function () {
  over.classList.add("hidden");
  over.classList.remove("float-right");
  body.classList.remove("blurer");
});

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    over.classList.add("hidden");

    body.classList.remove("blurer");
  });
}
function checker() {
  if (input.checked) {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }
}
input.addEventListener("click", checker);

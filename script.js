"use strict";

// mode
const input = document.querySelector("#k");
const moder = document.querySelector(".mode");
const html = document.querySelector("html");
const icon = document.querySelector(".nav-logo");
const times = document.querySelector(".times");
const links = document.querySelectorAll(".top");
const head = document.querySelector(".head");
const over = document.querySelector(".over");
const body = document.querySelector(".body");
const disap = document.querySelectorAll(".disap");
const main = document.querySelector("main");

icon.addEventListener("click", function () {
  over.classList.remove("hidden");
  over.classList.add("flex");
  body.classList.add("all");
});

times.addEventListener("click", function () {
  over.classList.add("hidden");
  body.classList.remove("all");
});
main.addEventListener("click", function () {
  over.classList.add("hidden");
  body.classList.remove("all");
});

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    over.classList.add("hidden");
    body.classList.add("all");
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

"use strict";
// mode
const input = document.querySelector("#check");
const moder = document.querySelector(".mode");
const html = document.querySelector("html");
const icon = document.querySelector(".nav-logo");
const times = document.querySelector(".times");
const links = document.querySelectorAll(".side-link");
const head = document.querySelector(".head");
const over = document.querySelector(".over");
const blury = document.querySelector(".blury");

const progress = document.querySelector("#in-progress");

// for (var i = 0; i < progress.length; i++) {
//   progress[i].addEventListener("click", function () {
//     over.classList.add("hidden");
//     blury.classList.add("all");
//   });
// }
icon.addEventListener("click", function () {
  over.classList.remove("hidden");
  over.classList.add("flex");
  console.log("weldon boy");
  blury.classList.add("blurer");
  head.classList.add("blurer");
});

blury.addEventListener("click", function () {
  over.classList.add("hidden");
  over.classList.remove("flex");
  blury.classList.remove("blurer");
  head.classList.remove("blurer");
});

times.addEventListener("click", function () {
  over.classList.add("hidden");
  over.classList.remove("flex");
  blury.classList.remove("blurer");
  head.classList.remove("blurer");
});

// head.addEventListener("click", function () {
//   over.classList.add("hidden");

//   blury.classList.remove("blurer");
//   head.classList.remove("blurer");
// });

// main.addEventListener("click", function () {
//   over.classList.add("hidden");
//   over.classList.remove("float-right");
//   blury.classList.remove("blurer");
// });

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    over.classList.add("hidden");
    over.classList.remove("flex");
    head.classList.remove("blurer");
    blury.classList.remove("blurer");
  });
}

//  Mode
function checker() {
  if (input.checked) {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }
}
input.addEventListener("click", checker);

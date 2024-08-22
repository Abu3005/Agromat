"use script";

const mainPage = document.querySelector("#mainPage");
const aboutPage = document.querySelector("#about-page");

if (mainPage || aboutPage) {
  const join = document.querySelectorAll("#join-us");
  const learn = document.querySelectorAll("#learn-more");
  // Join us button
  if (join.length >= 1) {
    join.forEach((btn) => {
      btn.addEventListener("click", () => {
        window.location.href = "join.html";
      });
    });
  }

  /////  To Navigate from main page to about page by learn btn
  learn.forEach((btn) => {
    btn.addEventListener("click", () => {
      window.location.href = "about.html";
    });
  });
}

//  To use country code on Form
const formPage = document.querySelector("#form-page");

if (formPage) {
  const form = document.querySelector("#myForm");
  const inputElements = form.querySelectorAll(".intl-tel-input");

  inputElements.forEach((input) => {
    window.intlTelInput(input, {
      utilsScript:
        "https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js",
    });
  });
}

// Overlay side bar

const moder = document.querySelector(".mode");
const icon = document.querySelector(".nav-logo");
const times = document.querySelector(".times");
const links = document.querySelectorAll(".side-link");
const head = document.querySelector(".head");
const over = document.querySelector(".over");
const blury = document.querySelector(".blury");

function showSidebar() {
  over.classList.remove("hidden");
  over.classList.add("flex");
  blury.classList.add("blurer");
  head.classList.add("blurer");
}
function hideSidebar() {
  over.classList.add("hidden");
  over.classList.remove("flex");
  blury.classList.remove("blurer");
  head.classList.remove("blurer");
}

icon.addEventListener("click", showSidebar);
blury.addEventListener("click", hideSidebar);
times.addEventListener("click", hideSidebar);

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", hideSidebar);
}

//  Dark Light Mode

const check = document.querySelector("#check");
// const check2 = document.querySelector("#check2");
// const check3 = document.querySelector("#check3");

const html = document.querySelector("html");

function checker() {
  if (check.checked) {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }
}
check.addEventListener("click", checker);

//  Password hiddind and unhiding

function togglePassword() {
  const passwordInput = document.getElementById("sign-in-password");
  const passwordIcon = document.getElementById("password-icon");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    passwordIcon.classList.remove("fa-eye");
    passwordIcon.classList.add("fa-eye-slash");
  } else {
    passwordInput.type = "password";
    passwordIcon.classList.remove("fa-eye-slash");
    passwordIcon.classList.add("fa-eye");
  }
}

// function mode() {
//   if (check1.checked || check1.checked || check1.checked) {
//     check1.checked = true;
//   } else {
//     html.classList.remove("dark");
//   }
// }
// if (check1.checked) {
//   check2.checked = true;
//   check3.checked = true;
//   html.classList.add("dark");
// }
// if (check2.checked) {
//   check1.checked = true;
//   check2.checked = true;
// }

// if (check3.checked) {
//   check1.checked = true;
//   check2.checked = true;
// }

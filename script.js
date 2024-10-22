{
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
}

async function fetchAndDisplayProducts() {
  try {
    const response = await fetch("agromat-data/data.json");
    const data = await response.json();
    const card = document.getElementById("product-container");
    // const card = document.getElementById("index-product");
    const search = document.getElementById("search");
    const cate = document.getElementById("cate");
    const size = document.getElementById("size");
    let d = data.categories;
    const cateKey = Object.keys(data.categories);

    function carder(child, index) {
      console.log(child.image);
      const buttonHTML =
        index % 2 === 0
          ? `<button class="w-full rounded-md mt-10 block bg-[#218225] text-[#fff] py-4 uppercase">Add to cart</button>`
          : `<div class="grid grid-cols-3 mt-10">
       <button class="text-4xl rounded-md bg-[#fff] border border-[#218225] text-[#218225]">
         <i class="fa-sharp fa-solid fa-minus"></i>
       </button>
       <div class="self-center text-5xl justify-self-center rounded-md">
         <p>3</p>
       </div>
       <button class="text-4xl py-2 rounded-md -center bg-[#218225] text-[#fff]">
         <i class="fa-sharp fa-solid fa-plus"></i>
       </button>
     </div>`;
      if (child) {
        card.innerHTML += `<div class="mt-8 product sm:mt-0">
  <div class="pb-10 shadow-md flex flex-col justify-start items-center">
    <img class="rounded-t-2xl mb-7 w-[321px] h-[338px]" src=/agromat-data/${child.image} alt="" />
    <div class="px-4">
      <div class="flex justify-between items-center pb-7">
        <p class="font-900 text-2xl">${child.name}</p>
        <div class="">
          <span class="logo">
            <span class="logo text-base">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star text-gray-200"></i>
            </span>
          </span>
          <span class="text-gray-400 text-xl">${child.rank}</span>
        </div>
      </div>
      <ul class="flex flex-col gap-3">
        <li class="text-gray-700">
          Origin:
          <span class="font-semibold text-[#191819]">&nbsp;${child.origin}</span>
        </li>
        <li class="text-gray-700">
          Description:
          <span class="text-[#191819] font-semibold">
            &nbsp;${child.description}
          
        </li>
        <li class="text-gray-700">
          Price:
          <span class="text-3xl text-[#C89200]">&nbsp;#${child.price}/Crate</span>
        </li>
      </ul>
      ${buttonHTML}
    </div>
  </div>
</div>`;
      }
    }

    function cardDisplay(par) {
      d[par].forEach((child, index) => {
        carder(child, index);
      });
    }
    //correct ********************************************* corect */
    let categories = d;
    search.addEventListener("input", () => {
      card.innerHTML = "";
      let searchValue = search.value.toLowerCase();

      // Iterate over all categories
      for (let category in categories) {
        categories[category].forEach((child, index) => {
          // Check if the item name includes the search value
          if (child.name.toLowerCase().includes(searchValue)) {
            carder(child, index);
          }
        });
      }
    });

    //********************************************* */

    cateKey.forEach((key) => {
      cate.innerHTML += `<option value=${key}>${key}</option>`;
    });
    for (const key in d) {
      cardDisplay(key);
    }
    cate.addEventListener("change", () => {
      card.innerHTML = "";
      if (cate.value === "all") {
        for (const key in d) {
          cardDisplay(key);
        }
      } else {
        card.innerHTML = "";
        cardDisplay(cate.value);
      }
    });
  } catch (error) {
    console.error("Error fetching JSON:", error);
  }
}

fetchAndDisplayProducts();

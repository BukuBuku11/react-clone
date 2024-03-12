// --- Dark Mode ---
const changeThemeBtn = document.querySelector(".Ctheme-btn");
const section = document.querySelector("section");
const navbar = document.querySelector(".main-header");
const footer = document.querySelector(".main-footer");

function changeIcon() {
  changeThemeBtn.innerHTML = "";

  const themeIcon = document.createElement("i");

  if (document.body.classList.contains("dark-theme")) {
    themeIcon.className = "far fa-moon";
    changeTheme();
    changeImg();
  } else {
    themeIcon.className = "fa-solid fa-sun";
    changeTheme();
    changeImg();
  }

  changeThemeBtn.appendChild(themeIcon);
}

function changeTheme() {
  document.body.classList.toggle("dark-theme");
  section.classList.toggle("dark-theme");
  navbar.classList.toggle("dark-theme");
  footer.classList.toggle("dark-theme");
}

function changeImg() {
  const section3img = document.querySelector(".sec-3-s2");
  const section4img = document.querySelector(".sec-4-s2");
  const section5img = document.querySelector(".sec-5-s2");
  const section6img = document.querySelector(".sec-6-s2");

  if (document.body.classList.contains("dark-theme")) {
    section3img.innerHTML = '<img src="/images/section3-dark.png" alt="...">';
    section4img.innerHTML = '<img src="/images/section4-dark.png" alt="...">';
    section5img.innerHTML = '<img src="/images/section5-dark.png" alt="...">';
    section6img.innerHTML = '<img src="/images/section6-dark.png" alt="...">';
  } else {
    section3img.innerHTML = '<img src="/images/section3.png" alt="...">';
    section4img.innerHTML = '<img src="/images/section4.png" alt="...">';
    section5img.innerHTML = '<img src="/images/section5.png" alt="...">';
    section6img.innerHTML = '<img src="/images/section6.png" alt="...">';
  }
}

// --- Like button ---

const likeButton = document.querySelector(".heart");
function LikeBtnChange() {
  if (likeButton.innerHTML === '<i class="fa-regular fa-heart"></i>') {
    likeButton.innerHTML =
      '<i class="fa-solid fa-heart" style="color: #ff3c20;"></i>';
  } else if (
    likeButton.innerHTML ===
    '<i class="fa-solid fa-heart" style="color: #ff3c20;"></i>'
  ) {
    likeButton.innerHTML = '<i class="fa-regular fa-heart"></i>';
  }
}

// --- Image scroll ---

window.onload = function () {
  const slideBox = document.querySelector(".sec-8-s2");
  let slideAmount = 0;
  let slideSpeed = 1;
  let slideDirection = 1;

  setInterval(function () {
    slideBox.scrollLeft = slideAmount;
    slideAmount += slideSpeed * slideDirection;
  }, 15);
  setTimeout(function () {
    slideDirection = -1;
    slideBox.scrollLeft = slideAmount;
    slideAmount += slideSpeed * slideDirection;
  }, 28000);
};

// --- Navbar responsiveness ---

const Hamburger = document.querySelector(".hamburger");
const smallSearchBtn = document.querySelector(".search-small");
const innerHam = document.querySelector(".inner-ham");
const HamIcon = document.querySelector(".ham-icon");

function showHamburgerMenuBtn() {
  if (window.innerWidth < 1024) {
    Hamburger.style["display"] = "block";
    smallSearchBtn.style["display"] = "block";
  } else if (window.innerWidth > 1024) {
    Hamburger.style["display"] = "none";
    smallSearchBtn.style["display"] = "none";
  }
}

Hamburger.addEventListener("click", () => {
  innerHam.classList.toggle("active");
});

window.onresize = showHamburgerMenuBtn;

// --- EventListeners ---
likeButton.addEventListener("click", LikeBtnChange);
changeThemeBtn.addEventListener("click", changeIcon);

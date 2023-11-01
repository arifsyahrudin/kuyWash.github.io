// navbar-autoChangeBg
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;

  const scrollThreshold = 250;

  if (scrollPosition > scrollThreshold) {
    navbar.style.backgroundColor = "rgba(254, 229, 6, .9)";
  } else {
    navbar.style.backgroundColor = "#fee506";
  }
});

// menu-button
const navbarNav = document.querySelector(".nav-list");
const menuButton = document.querySelector("#menu-button");
const menuSvg = document.querySelector(".menu-svg");

menuButton.onclick = (e) => {
  if (navbarNav.classList.contains("active")) {
    navbarNav.classList.remove("active");
    menuSvg.style.backgroundColor = "transparent";
    menuSvg.style.boxShadow = "none";
    menuButton.style.color = "#1e1c1c";
  } else {
    navbarNav.classList.add("active");
    menuSvg.style.boxShadow = "2px 2px 0 1px rgba(200,0,0,.5)";
    menuSvg.style.backgroundColor = "#1e1c1c";
    menuButton.style.color = "#fee506";
  }
  e.preventDefault();
};

function checkScreenWidth() {
  if (window.innerWidth <= 898) {
    menuButton.style.display = "inline-block";
  } else {
    menuButton.style.display = "none";
  }
}

document.addEventListener("click", function (e) {
  if (navbarNav.classList.contains("active") && !menuButton.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
    menuSvg.style.backgroundColor = "transparent";
    menuButton.style.color = "#1e1c1c";
    menuSvg.style.boxShadow = "none";
  }
});

window.addEventListener("load", checkScreenWidth);
window.addEventListener("resize", checkScreenWidth);

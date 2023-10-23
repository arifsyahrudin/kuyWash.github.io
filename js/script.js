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
const cancelButton = document.querySelector("#cancel-button");

menuButton.onclick = (e) => {
  navbarNav.classList.toggle("active");
  menuButton.style.display = "none";
  cancelButton.style.display = "inline-block";
  e.preventDefault();
};

cancelButton.onclick = (e) => {
  navbarNav.classList.remove("active");
  menuButton.style.display = "inline-block";
  cancelButton.style.display = "none";
  e.preventDefault();
};

function checkScreenWidth() {
  if (window.innerWidth <= 898) {
    menuButton.style.display = "inline-block";
    cancelButton.style.display = "none";
  } else {
    menuButton.style.display = "none";
    cancelButton.style.display = "none";
  }
}

document.addEventListener("click", function (e) {
  if (navbarNav.classList.contains("active") && !menuButton.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
    cancelButton.style.display = "none";
    menuButton.style.display = "block";
  }
});

window.addEventListener("load", checkScreenWidth);
window.addEventListener("resize", checkScreenWidth);

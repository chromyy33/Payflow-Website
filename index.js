const navBtnMenu = document.querySelector(".nav--btn--menu");
const navBtnClose = document.querySelector(".nav--btn--close");
const bodyEl = document.querySelector("body");
const mobileWrapper = document.querySelector(".mobile--wrapper");
const mobileLink = document.querySelector(".link");
const switchEl = document.querySelector(".theme--switch");
const switchWrapper = document.querySelector(".theme--switch--icon--wrapper");
const switchWrapperLight = document.querySelector(
  ".theme--switch--icon--wrapper--light"
);
const switchWrapperDark = document.querySelector(
  ".theme--switch--icon--wrapper--dark"
);
const switchIconDark = document.querySelector(".dark--icon");
const switchIconLight = document.querySelector(".light--icon");
const switchIconBox = document.querySelector(".theme--switch--icon--box");

// To open the menu
navBtnMenu.addEventListener("click", function () {
  navBtnMenu.classList.toggle("hidden");
  navBtnClose.classList.toggle("hidden");
  bodyEl.classList.add("overflow");
  mobileWrapper.classList.add("opacity");
});
// To close the menu
navBtnClose.addEventListener("click", function () {
  navBtnMenu.classList.toggle("hidden");
  navBtnClose.classList.toggle("hidden");
  bodyEl.classList.remove("overflow");
  mobileWrapper.classList.remove("opacity");
});

// switchWrapperLight.addEventListener("click", function () {
//   switchWrapperLight.classList.add("opacity-0");
//   switchWrapperDark.classList.add("opacity-1");
//   switchWrapperDark.classList.add("switch");
//   switchIconBox.classList.add("background");
// });
// switchWrapperDark.addEventListener("click", function () {
//   switchWrapperDark.classList.remove("opacity-1");
//   switchWrapperLight.classList.remove("opacity-0");
//   switchWrapperLight.classList.add("opacity-1");
//   switchWrapperLight.classList.add("r-switch");

//   switchIconBox.classList.remove("background");
// });

switchWrapperLight.addEventListener("click", function () {
  switchWrapperLight.classList.add("hidden");
  switchWrapperDark.classList.remove("hidden");
  switchWrapperDark.classList.add("switch");
  switchIconBox.classList.add("background");
  bodyEl.classList.add("dark");
});
switchWrapperDark.addEventListener("click", function () {
  switchWrapperDark.classList.remove("switch");
  switchWrapperDark.classList.add("hidden");
  switchWrapperLight.classList.add("r-switch");
  switchWrapperLight.classList.remove("hidden");

  switchIconBox.classList.remove("background");
  bodyEl.classList.remove("dark");
});

// Sticky nav
let navbar = document.getElementById("home");
let navPos = navbar.getBoundingClientRect().top;
window.addEventListener("scroll", (e) => {
  scrollPos = window.scrollY;
});
window.addEventListener("scroll", (e) => {
  let scrollPos = window.scrollY;
  if (scrollPos > navPos) {
    navbar.classList.add("sticky");
    header.classList.add("navbarOffsetMargin");
  } else {
    navbar.classList.remove("sticky");
    header.classList.remove("navbarOffsetMargin");
  }
});

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("links")) {
      mobileWrapper.classList.toggle("opacity");
      navBtnMenu.classList.toggle("hidden");
      navBtnClose.classList.toggle("hidden");
    }
  });
});

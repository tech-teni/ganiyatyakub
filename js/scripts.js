/*!
 * Start Bootstrap - Creative v7.0.6 (https://startbootstrap.com/theme/creative)
 * Copyright 2013-2022 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
 */
//
// Scripts
//

window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      offset: 74,
    });
  }

  // Collapse responsive navbar when toggler is visible
  const collapse = document.body.querySelector(".collapse");
  const navbarToggler = document.body.querySelector(".navbar-toggler");

  console.log(collapse);
  console.log(collapse.classList);

  // collapse.addEventListener("click", (event) => {
  //   event.preventDefault();
  //   collapse.classList.toggle("show");
  //   console.log(collapse.classList);
  // });
  navbarToggler.addEventListener("click", (event) => {
    event.preventDefault();
    collapse.classList.toggle("show");
    console.log(collapse.classList);
  });
  console.log(navbarToggler);

  // const responsiveNavItems = [].slice.call(
  //   document.querySelectorAll("#navbarResponsive .nav-link")
  // );
  // responsiveNavItems.map(function (responsiveNavItem) {
  //   responsiveNavItem.addEventListener("click", () => {
  //     if (window.getComputedStyle(navbarToggler).display !== "none") {
  //       navbarToggler.click();
  //     }
  //   });
  // });

  // Activate SimpleLightbox plugin for portfolio items
  new SimpleLightbox({
    elements: "#portfolio a.portfolio-box",
  });
});

/*!
 * Start Bootstrap - Stylish Portfolio v6.0.5 (https://startbootstrap.com/theme/stylish-portfolio)
 * Copyright 2013-2022 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-stylish-portfolio/blob/master/LICENSE)
 */
window.addEventListener("DOMContentLoaded", (event) => {
  const sidebarWrapper = document.getElementById("sidebar-wrapper");
  let scrollToTopVisible = false;
  // Closes the sidebar menu
  const menuToggle = document.body.querySelector(".menu-toggle");
  menuToggle.addEventListener("click", (event) => {
    event.preventDefault();
    sidebarWrapper.classList.toggle("active");
    _toggleMenuIcon();
    menuToggle.classList.toggle("active");
  });

  // Closes responsive menu when a scroll trigger link is clicked
  var scrollTriggerList = [].slice.call(
    document.querySelectorAll("#sidebar-wrapper .js-scroll-trigger")
  );
  scrollTriggerList.map((scrollTrigger) => {
    scrollTrigger.addEventListener("click", () => {
      sidebarWrapper.classList.remove("active");
      menuToggle.classList.remove("active");
      _toggleMenuIcon();
    });
  });

  function _toggleMenuIcon() {
    const menuToggleBars = document.body.querySelector(
      ".menu-toggle > .fa-bars"
    );
    const menuToggleTimes = document.body.querySelector(
      ".menu-toggle > .fa-xmark"
    );
    if (menuToggleBars) {
      menuToggleBars.classList.remove("fa-bars");
      menuToggleBars.classList.add("fa-xmark");
    }
    if (menuToggleTimes) {
      menuToggleTimes.classList.remove("fa-xmark");
      menuToggleTimes.classList.add("fa-bars");
    }
    console.log("hello");
  }

  // Scroll to top button appear
  document.addEventListener("scroll", () => {
    const scrollToTop = document.body.querySelector(".scroll-to-top");
    if (document.documentElement.scrollTop > 100) {
      if (!scrollToTopVisible) {
        fadeIn(scrollToTop);
        scrollToTopVisible = true;
      }
    } else {
      if (scrollToTopVisible) {
        fadeOut(scrollToTop);
        scrollToTopVisible = false;
      }
    }
  });
});

function fadeOut(el) {
  el.style.opacity = 1;
  (function fade() {
    if ((el.style.opacity -= 0.1) < 0) {
      el.style.display = "none";
    } else {
      requestAnimationFrame(fade);
    }
  })();
}

function fadeIn(el, display) {
  el.style.opacity = 0;
  el.style.display = display || "block";
  (function fade() {
    var val = parseFloat(el.style.opacity);
    if (!((val += 0.1) > 1)) {
      el.style.opacity = val;
      requestAnimationFrame(fade);
    }
  })();
}

// more info button

const moreInfoDiv = document.body.querySelector(".info-div");
const caption = document.body.querySelector(".caption-content");
const FullInfoDiv = document.body.querySelector(".full-info");
const moreInfoButton = document.body.querySelector(".more-info");
const cancelButtonDiv = document.body.querySelector(".cancel-button-container");

cancelButtonDiv.addEventListener("click", (event) => {
  moreInfoDiv.style.transform = "scale(1)";
  moreInfoDiv.style.zIndex = "1";
  caption.classList.toggle("hide-caption");
  FullInfoDiv.classList.toggle("hide-caption");
});
moreInfoButton.addEventListener("click", (event) => {
  event.preventDefault();
  moreInfoDiv.style.transform = "scale(1.1)";
  moreInfoDiv.style.zIndex = "2";
  caption.classList.toggle("hide-caption");
  FullInfoDiv.classList.toggle("hide-caption");

  console.log(caption);
  // transform: scale();
});

const moreInfoDiv2 = document.body.querySelector(".info-div2");
const caption2 = document.body.querySelector(".caption-content2");
const FullInfoDiv2 = document.body.querySelector(".full-info2");
const moreInfoButton2 = document.body.querySelector(".more-info2");
const cancelButtonDiv2 = document.body.querySelector(
  ".cancel-button-container2"
);

console.log(caption2);

cancelButtonDiv2.addEventListener("click", (event) => {
  event.preventDefault();
  moreInfoDiv2.style.transform = "scale(1)";
  moreInfoDiv2.style.zIndex = "1";
  caption2.classList.toggle("hide-caption2");
  FullInfoDiv2.classList.toggle("hide-caption2");
});
moreInfoButton2.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("clicked");

  moreInfoDiv2.style.transform = "scale(1.1)";
  moreInfoDiv2.style.zIndex = "2";
  caption2.classList.toggle("hide-caption2");
  FullInfoDiv2.classList.toggle("hide-caption2");

  console.log(caption2);
  // transform: scale();
});

// moreInfoDiv.addEventListener("click", (event) => {
//   event.preventDefault();
//   moreInfoDiv.style.transform = "scale(1)";
//   moreInfoDiv.style.zIndex = "0";
//   caption.classList.toggle("hide-caption");
//   FullInfoDiv.classList.toggle("hide-caption");

//   console.log(caption);
//   // transform: scale();
// });

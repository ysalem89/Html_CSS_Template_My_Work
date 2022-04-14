window.onscroll = function () {
  let nav = document.getElementById("nav");
  if (document.documentElement.scrollTop > 50) {
    nav.classList.add("nav-fixed");
    nav.classList.remove("nav-transparent");
    document.querySelector(".nav-logo img").src = "assets/images/logo.webp";
  } else {
    nav.classList.remove("nav-fixed");
    nav.classList.add("nav-transparent");
    if (window.innerWidth > 768) {
      document.querySelector(".nav-logo img").src =
        "assets/images/logo-alt.webp";
    }
  }

  //   let bodyRect = document.body.getBoundingClientRect();
  //   let rect = about.getBoundingClientRect();
  //   if (
  //     document.documentElement.scrollTop >= rect.top &&
  //     document.documentElement.scrollTop <= rect.top + rect.height
  //   ) {
  //     document.getElementById("about-link").classList.add("active");

  //     console.log(document.documentElement.scrollTop);
  //     console.log(bodyRect.top + "/" + bodyRect.bottom);
  //     console.log(rect.top + "/" + rect.bottom);
  //   } else {
  //     document.getElementById("about-link").classList.remove("active");
  //   }
};

document.querySelector(".nav-collapse").onclick = function () {
  let nav = document.getElementById("nav");
  nav.classList.toggle("open");
};

window.onresize = function () {
  if (window.innerWidth > 768) {
    let nav = document.getElementById("nav");
    nav.classList.remove("open");
    document.querySelector(".nav-logo img").src = "assets/images/logo-alt.webp";
  } else {
    document.querySelector(".nav-logo img").src = "assets/images/logo.webp";
  }
};

/* Highlight Clicked Navigation Links  */

window.onload = function () {
  let navLinks = document.querySelectorAll(".main-nav li a");
  navLinks.forEach((element) => {
    element.onclick = function (x) {
      navLinks.forEach((e) => {
        e.classList.remove("active");
      });
      element.classList.add("active");
    };
  });
};

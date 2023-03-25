const addEventListener = () => {
  const toggle = document.getElementById("toggleLight");

  toggle.addEventListener("click", function () {
    toggle.classList.toggle("bi-moon");
    lightSwitchEffect();
  });
};

const lightSwitchEffect = () => {
  const toggle = document.getElementById("toggleLight");

  const body = document.querySelector("body");
  const h1 = document.querySelector("h1");
  const p = document.querySelector("p");
  const a = Array.from(document.querySelectorAll("a"));
  const h2 = document.querySelector("h2");
  const navbar = document.querySelector(".navbar");
  const logo = document.querySelector(".logo");
  const sideMenu = document.querySelector(".side-menu");

  if (toggle.classList.contains("bi-moon")) {
    // Dark mode
    for (let i = 0; i < a.length; i = i + 1) {
      a[i].style.color = "black";
      a[i].style.transition = "2s";
    }

    const h2Elements = document.querySelectorAll("h2");

    h2Elements.forEach((tag) => {
      tag.style.color = "white";
      tag.style.transition = "1s";
    });

    body.style.background = "white";
    body.style.color = "black";
    body.style.transition = "2s";
    h1.style.color = "black";
    h1.style.transition = "2s";
    h2.style.color = "black";
    h2.style.transition = "1s";

    sideMenu.style.background = "white";
    sideMenu.style.transition = "1s";

    logo.style.color = "black";
    logo.style.transition = "2s";

    navbar.style.borderBottom = "0.3px solid black";
    navbar.style.transition = "2s";
  } else {
    body.style.background = "#282c34";
    body.style.color = "white";
    body.style.transition = "2s";

    sideMenu.style.background = "#282c34";
    sideMenu.style.color = "white";
    sideMenu.style.transition = "1s";

    h1.style.color = "white";
    h1.style.transition = "2s";

    logo.style.color = "white";
    logo.style.transition = "2s";

    const h2Elements = document.querySelectorAll("h2, a");

    h2Elements.forEach((tag) => {
      tag.style.color = "white";
      tag.style.transition = "2s";
    });

    for (let i = 0; i < a.length; i = i + 1) {
      a[i].style.color = "white";
      a[i].style.transition = "2s";
    }

    navbar.style.borderBottom = "0.3px solid white";
    navbar.style.transition = "2s";
  }
};

addEventListener();

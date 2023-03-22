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

  if (toggle.classList.contains("bi-moon")) {
    // Dark mode
    body.style.background = "#282c34";
    body.style.color = "white";

    body.style.transition = "2s";

    h1.style.color = "white";
    h1.style.transition = "2s";

    const cards = document.querySelectorAll(".card");
    const h2Elements = document.querySelectorAll("h2, a");

    h2Elements.forEach((tag) => {
      tag.style.color = "white";
      tag.style.transition = "2s";
    });

    for (let i = 0; i < a.length; i = i + 1) {
      a[i].style.color = "white";
      a[i].style.transition = "2s";
    }

    cards.forEach((card) => {
      card.style.background = "white";
      card.style.transition = "2s";
    });

    navbar.style.borderBottom = "0.3px solid white";
    navbar.style.transition = "2s";
  } else {
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

    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      card.style.background = "black";
      card.style.transition = "2s";
    });

    body.style.background = "white";
    body.style.color = "black";
    body.style.transition = "2s";
    h1.style.color = "black";
    h1.style.transition = "2s";
    h2.style.color = "black";
    h2.style.transition = "1s";

    navbar.style.borderBottom = "0.3px solid black";
    navbar.style.transition = "2s";
  }
};

addEventListener();

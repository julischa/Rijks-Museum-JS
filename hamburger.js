const addMenuEventListener = () => {
  const menuBtn = document.querySelector(".navbar-toggler");
  const sideMenu = document.querySelector(".side-menu");

  menuBtn.addEventListener("click", () => {
    console.log("click");
    sideMenu.classList.toggle("active");
  });
};

addMenuEventListener();

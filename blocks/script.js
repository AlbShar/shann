document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll('[id*="btn"]');
  const btnClose = document.querySelector(".popup__close-btn");
  const popup = document.querySelector(".popup");
  const body = document.querySelector("body");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      popup.style.display = "block";
      body.style.overflow = "hidden";
    });
  });

  btnClose.addEventListener("click", () => {
    popup.style.display = "none";
    body.style.overflow = "auto";
  });

  const technologies = document.querySelector(".technologies");
  const engine = document.querySelector(".engine");
  let lastScrollPosition = window.scrollY || document.documentElement.scrollTop;

  function handleScroll() {
    const rectTechnologies = technologies.getBoundingClientRect();

    const currentScrollPosition =
      window.scrollY || document.documentElement.scrollTop;
    const deltaY = currentScrollPosition - lastScrollPosition;

    if (deltaY < 0) {
      // Скролл вверх
      if (engine.getBoundingClientRect().top >= rectTechnologies.height) {
        technologies.style = "";
        engine.style = "";
      }
    } else {
      // Скролл вниз
      const rectTechnologies = technologies.getBoundingClientRect();
      const rectTechnologiesBottom = rectTechnologies.bottom;
      const rectTechnologiesHeight = rectTechnologies.height;
      const marginTopCustom = rectTechnologiesHeight + 20;

      if (
        rectTechnologiesBottom <=
        20 + engine.getBoundingClientRect().height
      ) {
        technologies.style.position = "fixed";
        technologies.style.zIndex = "3";
        technologies.style.top = "0";
        technologies.style.width = "100%";
        engine.style.marginTop = marginTopCustom + "px";
      }
    }

    lastScrollPosition = currentScrollPosition;
  }

  window.addEventListener("scroll", handleScroll);
});

document.addEventListener("DOMContentLoaded", () => {
  let lastScrollPosition =
    window.pageYOffset || document.documentElement.scrollTop;
  const technologies = document.querySelector(".technologies");
  const engine = document.querySelector(".engine");

  function handleScroll() {
    const currentScrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;
    const deltaY = currentScrollPosition - lastScrollPosition;

    if (deltaY < 0) {
      // Скролл вверх
      if (currentScrollPosition > 542) {
        // technologies.style = "";
        engine.style = "";
      }
    } else {
      // Скролл вниз
      const rectTechnologies = technologies.getBoundingClientRect();
      const rectTechnologiesBottom = rectTechnologies.bottom;
      const rectTechnologiesHeight = rectTechnologies.height;
      const marginTopCustom = rectTechnologiesHeight + 20;
      console.log(rectTechnologies);

      if (rectTechnologiesBottom <= 20 + engine.getBoundingClientRect().height) {
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

export function initHeaderScroll() {
  const header = document.querySelector(".header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      header.classList.add("header-fixed");
    } else {
      header.classList.remove("header-fixed");
    }
  });

  function updatePadding() {
    // const header = document.querySelector('header');
    const introText = document.querySelector('.intro__text');

    if (header && introText) {
      const headerHeight = (header.offsetHeight * 1.5);
      introText.style.paddingTop = `${headerHeight}px`;
    }
  }

  // Запуск при загрузке и изменении окна
  window.addEventListener('load', updatePadding);
  window.addEventListener('resize', updatePadding);
  window.addEventListener('scroll', () => {
    // const header = document.querySelector('header');
    if (window.scrollY > 50) {
      header.classList.add('header-fixed');
    } else {
      header.classList.remove('header-fixed');
    }
    updatePadding();
  });
}

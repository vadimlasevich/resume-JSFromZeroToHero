const burgerMenu = document.querySelector('.header__burger');
const mobileMenu = document.querySelector('.header__mobile-menu');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');
const header = document.querySelector('.header');
const shadowed = document.querySelector('.shadowed');
const sliderBtnNext = document.querySelector('.works-slider__btn-next');
const sliderBtnPrev = document.querySelector('.works-slider__btn-prev');

const toggleMobileMenu = () => {
  burgerMenu.classList.toggle('header__burger-rotate');
  mobileMenu.classList.toggle('mobile-menu-show');
  header.classList.toggle('header-visible-overflow');
  shadowed.classList.toggle('shadowed-active');
  document.body.classList.toggle('stop-scroll');

  mobileMenuLinks.forEach((link) => {
    link.addEventListener('click', () => burgerMenu.click());
  });

  shadowed.addEventListener('click', () => burgerMenu.click());
};
const rollSliderNext = () => {};
const rollSliderPrev = () => {};

burgerMenu.addEventListener('click', toggleMobileMenu);
sliderBtnNext.addEventListener('click', rollSliderNext);
sliderBtnPrev.addEventListener('click', rollSliderPrev);

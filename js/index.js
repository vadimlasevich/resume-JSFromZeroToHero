const burgerMenu = document.querySelector('.header__burger');
const mobileMenu = document.querySelector('.header__mobile-menu');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');
const header = document.querySelector('.header');
const shadowed = document.querySelector('.shadowed');

const sliderContainer = document.querySelector('.works-slider__container');
const sliderSlides = document.querySelectorAll('.works-slider__slide');
const sliderBtnNext = document.querySelector('.works-slider__btn-next');
const sliderBtnPrev = document.querySelector('.works-slider__btn-prev');

let indexSlide = 0;
let slidesLenght;

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

const getSlidesLenght = () => {
  if (window.innerWidth <= 520) {
    return (slidesLenght = sliderSlides.length - 1);
  } else {
    return (slidesLenght = sliderSlides.length - 2);
  }
};

const nextSlide = () => {
  getSlidesLenght();

  if (indexSlide === slidesLenght) {
    indexSlide = 0;
    rollSlider(indexSlide);
  } else {
    indexSlide++;
    rollSlider(indexSlide);
  }
};

const prevSlide = () => {
  getSlidesLenght();

  if (indexSlide === 0) {
    indexSlide = slidesLenght;
    rollSlider(indexSlide);
  } else {
    indexSlide--;
    rollSlider(indexSlide);
  }
};

const rollSlider = (index) => {
  let widthSlide = sliderSlides[0].offsetWidth;
  sliderContainer.style.transform = `translate(-${index * widthSlide}px)`;
};

burgerMenu.addEventListener('click', toggleMobileMenu);
sliderBtnNext.addEventListener('click', nextSlide);
sliderBtnPrev.addEventListener('click', prevSlide);

'use strict';

// modal variables
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

// modal function
const modalCloseFunc = function () { modal.classList.add('closed') }

// mobile menu variables
const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {

  // mobile menu function
  const mobileMenuCloseFunc = function () {
    mobileMenu[i].classList.remove('active');
    overlay.classList.remove('active');
  }

  mobileMenuOpenBtn[i].addEventListener('click', function () {
    mobileMenu[i].classList.add('active');
    overlay.classList.add('active');
  });

  mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
  overlay.addEventListener('click', mobileMenuCloseFunc);

}





// accordion variables
const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');

for (let i = 0; i < accordionBtn.length; i++) {

  accordionBtn[i].addEventListener('click', function () {

    const clickedBtn = this.nextElementSibling.classList.contains('active');

    for (let i = 0; i < accordion.length; i++) {

      if (clickedBtn) break;

      if (accordion[i].classList.contains('active')) {

        accordion[i].classList.remove('active');
        accordionBtn[i].classList.remove('active');

      }

    }

    this.nextElementSibling.classList.toggle('active');
    this.classList.toggle('active');

  });

}

var currentIndex = 0;
var sliderItems = document.querySelectorAll(".slider-item");
var sliderContainer = document.querySelector(".slider-container");

function nextSlide() {
  sliderItems[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % sliderItems.length;
  sliderItems[currentIndex].classList.add("active");

  // Ambil nilai indeks dari data-index untuk menampilkan di console
  var activeIndex = sliderItems[currentIndex].getAttribute("data-index");
  console.log("Aktif:", activeIndex);

  // Hitung lebar container dan item untuk menggeser scrollbar
  var containerWidth = sliderContainer.offsetWidth;
  var itemWidth = sliderItems[currentIndex].offsetWidth;
  var scrollLeft = currentIndex * itemWidth;

  // Geser scrollbar ke posisi yang sesuai
  if (scrollLeft + containerWidth > sliderContainer.scrollWidth) {
    sliderContainer.scrollLeft = sliderContainer.scrollWidth - containerWidth;
  } else {
    sliderContainer.scrollLeft = scrollLeft;
  }
}

function startSlider() {
  setInterval(nextSlide, 2000);
}

startSlider();


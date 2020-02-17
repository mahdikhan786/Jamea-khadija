//cashing the Dom
const menuToggle = document.querySelector('.menubar');
const topToggle = document.querySelector('.top-toggler');
const bottomToggle = document.querySelector('.bottom-toggler');
const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");
const imgSlide = document.querySelector(".img-slide");
const sliderImages = document.querySelectorAll(".slide-img");


// variables 
let slideImagesCount = sliderImages.length - 1;
let sliderCount = 0;
let currentImgWidth = sliderImages[sliderCount].offsetWidth;

//functions

//= menu toggler
const menuToggler = () => {
    topToggle.classList.toggle('rotate-downwards');
    bottomToggle.classList.toggle('rotate-upwards');
}

//= image gallery slider
//== to right
const leftSlide = () => {
    // (>) button
    if (sliderCount < slideImagesCount) {
      imgSlide.style.transform = `translateX(-${currentImgWidth +
        currentImgWidth * sliderCount}px)`;
      sliderCount++;
    } else if (sliderCount == slideImagesCount) {
      sliderCount = 0;
      imgSlide.style.transform = `translateX(0px)`;
    }
  };
  // to left 
  const rightSlide = () => {
    // (<) button
  
    if (sliderCount > 0) {
      imgSlide.style.transform = `translateX(-${currentImgWidth * sliderCount -
        currentImgWidth}px)`;
      sliderCount--;
    } else if (sliderCount == 0) {
      sliderCount = slideImagesCount;
      console.log(sliderCount);
      imgSlide.style.transform = `translateX(-${currentImgWidth *
        sliderCount}px)`;
    }
  };

//automatic slider
let automaticSlider = setInterval(leftSlide,2000);

//slider stop
let stopSlider = () => clearInterval(automaticSlider);

//eventListeners
menuToggle.addEventListener('click', menuToggler);
leftBtn.addEventListener("click", rightSlide);
rightBtn.addEventListener("click", leftSlide);
leftBtn.addEventListener("click", stopSlider);
rightBtn.addEventListener("click", stopSlider);

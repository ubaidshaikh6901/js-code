const sliderContainer = document.querySelector(".slider-container");
const totalSlides = document.querySelectorAll(".slide-item").length;
let currentIndex = 0;

const slideIntervalTime = 3000;
let slideInterval;

function goToNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSliderPosition();
}

function goToPreviousSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSliderPosition();
}

function updateSliderPosition() {
    const slides = document.querySelectorAll(".slide-item");

    slides.forEach((slide, index) => {
        slide.style.opacity = index === currentIndex ? '1' : '0';
    });

    sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function startSlider() {
    slideInterval = setInterval(goToNextSlide, slideIntervalTime);
}

function stopSlider() {
    clearInterval(slideInterval);
}
document.querySelector(".next-button").addEventListener("click", () => {
    goToNextSlide();
    stopSlider();
    startSlider();
});

document.querySelector(".prev-button").addEventListener("click", () => {
    goToPreviousSlide();
    stopSlider();
    startSlider();
});
updateSliderPosition();
startSlider();
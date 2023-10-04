const slides = [
    '<div><img src="images/gallery_slider/sand_training.png" alt="sand training"></div>',
    '<div><img src="images/gallery_slider/training_near_the_sea.png" alt="training near the sea"></div>',
    '<div><img src="images/gallery_slider/beach_workout.png" alt="beach workout"></div>',
    '<div><img src="images/gallery_slider/stance_training.png" alt="stance training"></div>',
];

let currentSlide = 0;

const slideContainer = document.querySelector('.gallery__carousel-slide');

function renderSlide() {
    slideContainer.innerHTML = slides[currentSlide];
}

function nextSlide() {
    currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
    renderSlide();
}

setInterval(nextSlide, 3000);

renderSlide();

const nextButton = document.querySelector('.gallery__carousel-btn-next');
nextButton.addEventListener('click', nextSlide);

function prevSlide() {
    currentSlide = currentSlide - 1 < 0 ? slides.length - 1 : currentSlide - 1;
    renderSlide();
}

const prevButton = document.querySelector('.gallery__carousel-btn-prev');
prevButton.addEventListener('click', prevSlide);
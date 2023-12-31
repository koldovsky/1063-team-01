const carousel = document.querySelector('.animated-carousel');
const carouselInner = carousel.querySelector('.animated-carousel__inner');

let slidesPerView = getSlidesPerView();
let slides = Array.from(carouselInner.children);
let currentIndex = 0;

setupCarousel();

function getSlidesPerView() {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
}

function setupCarousel() {
    slides = slides.filter(slide => !slide.classList.contains('clone'));

    const clonesStart = slides.slice(-slidesPerView).map(cloneSlide);
    const clonesEnd = slides.slice(0, slidesPerView).map(cloneSlide);

    carouselInner.innerHTML = '';
    carouselInner.append(...clonesStart, ...slides, ...clonesEnd);

    slides = Array.from(carouselInner.children);

    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
    }, 3000); 
}

function cloneSlide(slide) {
    const clone = slide.cloneNode(true);
    clone.classList.add('clone');
    return clone;
}

function updateCarousel() {
    carouselInner.style.transition = 'transform 0.5s ease-in-out';
    carouselInner.style.transform = `translateX(-${currentIndex * 100 / slidesPerView}%)`;

    if (currentIndex >= slides.length - slidesPerView) {
        setTimeout(() => {
            currentIndex = slidesPerView;
            carouselInner.style.transition = 'none';
            carouselInner.style.transform = `translateX(-${currentIndex * 100 / slidesPerView}%)`;
        }, 500); 
    }
}

window.addEventListener('resize', () => {
    slidesPerView = getSlidesPerView();
    setupCarousel();
});




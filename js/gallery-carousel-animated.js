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
    // Remove clones if they exist
    slides = slides.filter(slide => !slide.classList.contains('clone'));

    // Add clones at start and end for infinite looping
    const clonesStart = slides.slice(-slidesPerView).map(cloneSlide);
    const clonesEnd = slides.slice(0, slidesPerView).map(cloneSlide);

    // Add all slides to the carousel
    carouselInner.innerHTML = '';
    carouselInner.append(...clonesStart, ...slides, ...clonesEnd);

    // Update slides
    slides = Array.from(carouselInner.children);

    // Start automatic sliding
    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
    }, 3000); // Прокручувати кожні 3 секунди (змініть за потребою)
}

function cloneSlide(slide) {
    const clone = slide.cloneNode(true);
    clone.classList.add('clone');
    return clone;
}

function updateCarousel() {
    carouselInner.style.transition = 'transform 0.5s ease-in-out';
    carouselInner.style.transform = `translateX(-${currentIndex * 100 / slidesPerView}%)`;

    // Перевірка, чи досягнутий кінець каруселі, і якщо так, перейти на початок
    if (currentIndex >= slides.length - slidesPerView) {
        setTimeout(() => {
            currentIndex = slidesPerView;
            carouselInner.style.transition = 'none';
            carouselInner.style.transform = `translateX(-${currentIndex * 100 / slidesPerView}%)`;
        }, 500); // Час затримки, щоб анімація завершилася перед зміною стилів
    }
}

window.addEventListener('resize', () => {
    slidesPerView = getSlidesPerView();
    setupCarousel();
});




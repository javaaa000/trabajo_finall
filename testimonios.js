const testimonialContent = document.querySelector('.testimonial-content');
const testimonials = document.querySelectorAll('.testimonial');
const prevBtn = document.querySelector('.slider-arrow.prev');
const nextBtn = document.querySelector('.slider-arrow.next');
let current = 0;

function updateSlider() {
    testimonialContent.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach(d => d.classList.remove('active'));
    dots[current].classList.add('active');
}

function nextTestimonial() {
    current = (current + 1) % testimonials.length;
    updateSlider();
}

function prevTestimonial() {
    current = (current - 1 + testimonials.length) % testimonials.length;
    updateSlider();
}

// INICIALIZAR AL CARGAR LA PÁGINA
updateSlider();

let autoSlide = setInterval(nextTestimonial, 6000);

nextBtn.addEventListener('click', () => {
    clearInterval(autoSlide);
    nextTestimonial();
    autoSlide = setInterval(nextTestimonial, 6000);
});

prevBtn.addEventListener('click', () => {
    clearInterval(autoSlide);
    prevTestimonial();
    autoSlide = setInterval(nextTestimonial, 6000);
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        clearInterval(autoSlide);
        current = index;
        updateSlider();
        autoSlide = setInterval(nextTestimonial, 6000);
    });
});
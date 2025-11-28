const testimonials = document.querySelectorAll('.testimonial');
    const prevBtn = document.querySelector('.slider-arrow.prev');
    const nextBtn = document.querySelector('.slider-arrow.next');

    if (testimonials.length > 0 && prevBtn && nextBtn) {
        let current = 0;

        function showTestimonial(index) {
            testimonials.forEach(t => t.classList.remove('active'));
            testimonials[index].classList.add('active');
        }

        function nextTestimonial() {
            current = (current + 1) % testimonials.length;
            showTestimonial(current);
        }

        function prevTestimonial() {
            current = (current - 1 + testimonials.length) % testimonials.length;
            showTestimonial(current);
        }

        // Auto slide cada 6 segundos
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
    }
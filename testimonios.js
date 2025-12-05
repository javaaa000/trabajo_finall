    // ========== CAROUSEL DE IMÁGENES ==========
    const imageSlides = document.querySelectorAll('.carousel-slide');
    const imageIndicators = document.querySelectorAll('.carousel-indicators .indicator');
    const imagePrevBtn = document.querySelector('.prev-arrow');
    const imageNextBtn = document.querySelector('.next-arrow');
    
    if (imageSlides.length > 0 && imagePrevBtn && imageNextBtn) {
        let currentImageSlide = 0;

        function showImageSlide(n) {
            imageSlides.forEach(slide => slide.classList.remove('active'));
            imageIndicators.forEach(ind => ind.classList.remove('active'));
            
            currentImageSlide = (n + imageSlides.length) % imageSlides.length;
            
            imageSlides[currentImageSlide].classList.add('active');
        }

        function nextImageSlide() {
            showImageSlide(currentImageSlide + 1);
        }

        function prevImageSlide() {
            showImageSlide(currentImageSlide - 1);
        }

        // Auto slide cada 5 segundos
        let imageAutoSlide = setInterval(nextImageSlide, 5000);

        // Botones
        imageNextBtn.addEventListener('click', () => {
            clearInterval(imageAutoSlide);
            nextImageSlide();
            imageAutoSlide = setInterval(nextImageSlide, 5000);
        });

        imagePrevBtn.addEventListener('click', () => {
            clearInterval(imageAutoSlide);
            prevImageSlide();
            imageAutoSlide = setInterval(nextImageSlide, 5000);
        });

        // Indicadores
        imageIndicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                clearInterval(imageAutoSlide);
                showImageSlide(index);
                imageAutoSlide = setInterval(nextImageSlide, 5000);
            });
        });

        // Pausar en hover
        const heroCarousel = document.querySelector('.hero-carousel');
        if (heroCarousel) {
            heroCarousel.addEventListener('mouseenter', () => {
                clearInterval(imageAutoSlide);
            });

            heroCarousel.addEventListener('mouseleave', () => {
                imageAutoSlide = setInterval(nextImageSlide, 5000);
            });
        }
    }

    // ========== CAROUSEL DE TESTIMONIOS ==========
    const testimonialContent = document.querySelector('.testimonial-content');
    const testimonials = document.querySelectorAll('.testimonial');
    const testimonialPrevBtn = document.querySelector('.slider-arrow.prev');
    const testimonialNextBtn = document.querySelector('.slider-arrow.next');

    if (testimonialContent && testimonials.length > 0 && testimonialPrevBtn && testimonialNextBtn) {
        let currentTestimonial = 0;

        function updateTestimonialSlider() {
            testimonialContent.style.transform = `translateX(-${currentTestimonial * 100}%)`;
        }

        function nextTestimonial() {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            updateTestimonialSlider();
        }

        function prevTestimonial() {
            currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
            updateTestimonialSlider();
        }

        // Inicializar
        updateTestimonialSlider();

        // Auto slide cada 6 segundos
        let testimonialAutoSlide = setInterval(nextTestimonial, 6000);

        // Botones
        testimonialNextBtn.addEventListener('click', () => {
            clearInterval(testimonialAutoSlide);
            nextTestimonial();
            testimonialAutoSlide = setInterval(nextTestimonial, 6000);
        });

        testimonialPrevBtn.addEventListener('click', () => {
            clearInterval(testimonialAutoSlide);
            prevTestimonial();
            testimonialAutoSlide = setInterval(nextTestimonial, 6000);
        });
    }

// ========== ANIMACIÓN PINK ACCENTS CON SCROLL ==========
    const pinkAccents = document.querySelectorAll('.pink-accent');
    
    window.addEventListener('scroll', () => {
        pinkAccents.forEach((accent, index) => {
            const rect = accent.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const windowCenter = windowHeight / 1;
            
            // Distancia del elemento al centro de la ventana
            const elementCenter = rect.top + (rect.height / 2);
            const distanceFromCenter = windowCenter - elementCenter;
            
            // Cuando está arriba (fuera): negativo (izquierda)
            // Cuando está en centro: 0 (centrado)
            // Cuando está abajo: positivo (pero lo limitamos)
            const movement = distanceFromCenter * 1.0;
            
            // Limitar: mínimo -200 (izquierda), máximo 0 (centro)
            const limitedMovement = Math.max(0, Math.min(1000, movement));
            
            accent.style.transform = `translateX(${limitedMovement}px)`;
        });
    });
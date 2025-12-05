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

 // ========== CAROUSEL DE VALORES ==========
const valueCards = document.querySelectorAll('.value-card');
const valuesTrack = document.querySelector('.values-track');
const valuesDots = document.querySelectorAll('.values-dot');
const valuesPrevBtn = document.querySelector('.values-prev');
const valuesNextBtn = document.querySelector('.values-next');

if (valueCards.length > 0 && valuesTrack && valuesPrevBtn && valuesNextBtn) {
    let currentValue = 0;

    function showValueCard(n) {
        currentValue = (n + valueCards.length) % valueCards.length;
        
        // Calcular el desplazamiento considerando el gap
        const cardWidth = valueCards[0].offsetWidth;
        const gap = 30; // mismo valor del CSS
        const offset = currentValue * (cardWidth + gap);
        
        valuesTrack.style.transform = `translateX(-${offset}px)`;
        
        valuesDots.forEach(dot => dot.classList.remove('active'));
        valuesDots[currentValue].classList.add('active');
    }

    function nextValue() {
        showValueCard(currentValue + 1);
    }

    function prevValue() {
        showValueCard(currentValue - 1);
    }

    // Inicializar
    showValueCard(0);

    // Auto slide cada 5 segundos
    let valuesAutoSlide = setInterval(nextValue, 5000);

    // Botones
    valuesNextBtn.addEventListener('click', () => {
        clearInterval(valuesAutoSlide);
        nextValue();
        valuesAutoSlide = setInterval(nextValue, 5000);
    });

    valuesPrevBtn.addEventListener('click', () => {
        clearInterval(valuesAutoSlide);
        prevValue();
        valuesAutoSlide = setInterval(nextValue, 5000);
    });

    // Dots
    valuesDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            clearInterval(valuesAutoSlide);
            showValueCard(index);
            valuesAutoSlide = setInterval(nextValue, 5000);
        });
    });

    // Pausar en hover
    const valuesCarousel = document.querySelector('.values-carousel');
    if (valuesCarousel) {
        valuesCarousel.addEventListener('mouseenter', () => {
            clearInterval(valuesAutoSlide);
        });

        valuesCarousel.addEventListener('mouseleave', () => {
            valuesAutoSlide = setInterval(nextValue, 5000);
        });
    }

    // Recalcular en resize
    window.addEventListener('resize', () => {
        showValueCard(currentValue);
    });
}
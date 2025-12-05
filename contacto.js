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
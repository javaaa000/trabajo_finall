// Crear overlay
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);

    // Seleccionar todas las tarjetas
    const cards = document.querySelectorAll('.service-card');

    cards.forEach(card => {
        // Crear botón cerrar
        const closeBtn = document.createElement('button');
        closeBtn.className = 'close-card';
        closeBtn.innerHTML = '×';
        card.appendChild(closeBtn);

        // Click en la tarjeta o botón "Ver más"
        const toggleBtn = card.querySelector('.card-toggle');
        
        toggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            expandCard(card);
        });

        // Click en botón cerrar
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            closeCard(card);
        });
    });

    // Click en overlay para cerrar
    overlay.addEventListener('click', () => {
        cards.forEach(card => closeCard(card));
    });

    function expandCard(card) {
        // Cerrar otras tarjetas
        cards.forEach(c => {
            if (c !== card) closeCard(c);
        });
        
        card.classList.add('expanded');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeCard(card) {
        card.classList.remove('expanded');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Cerrar con tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            cards.forEach(card => closeCard(card));
        }
    });
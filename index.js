const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTargert.setAttribute('aria-expanded', 'active');
    if (active) { event.currentTargert.setAttribute('aria-label', 'Fechar Menu'); } else {
        event.currentTargert.setAttribute('aria-label', 'Abrir Menu')
    }
};

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);  
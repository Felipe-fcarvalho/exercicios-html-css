const btn = document.getElementById('tema')
const body = document.body;

function temaEscuro(tipo) {
    if (tipo == true) {
        body.classList.add('escuro');
        btn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        body.classList.remove('escuro');
        btn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
}

const temaSalvo = localStorage.getItem('tema');
temaEscuro(temaSalvo === 'escuro');

btn.addEventListener('click', () => {
    const isescuro = body.classList.toggle('escuro');
    temaEscuro(isescuro);
    localStorage.setItem('tema', isescuro ? 'escuro' : 'claro');
});

const navLinks = document.querySelectorAll('#menu ul a.link');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight - 15;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});
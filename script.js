// 1. Lógica do Dark Mode
const themeBtn = document.getElementById('theme-toggle');
const themeIcon = themeBtn.querySelector('i');
const body = document.body;

// Verifica se o usuário já tinha salvo uma preferência
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun'); // Muda ícone para sol
}

themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Troca o ícone
    if (body.classList.contains('dark-mode')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark'); // Salva preferência
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light'); // Salva preferência
    }
});

// 2. Scroll Suave (Código anterior mantido)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 3. Animação ao carregar
window.addEventListener('load', () => {
    const heroContent = document.querySelector('.hero-content');
    if(heroContent) {
        heroContent.style.opacity = 0;
        heroContent.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            heroContent.style.transition = '1s ease';
            heroContent.style.opacity = 1;
            heroContent.style.transform = 'translateY(0)';
        }, 200);
    }
});
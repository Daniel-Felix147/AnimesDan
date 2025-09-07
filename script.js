let slideIndex = 1;
let slideTimer;
let isAnimating = false;

// Show slides
function showSlides(n, instant = false) {
    if (isAnimating && !instant) return;
    
    const wrapper = document.querySelector('.slides-wrapper');
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");
    const slidesToShow = 4;
    const totalGroups = Math.ceil(slides.length / slidesToShow);
    
    // Ajusta o índice para o loop
    if (n > totalGroups) {
        slideIndex = 1;
    } else if (n < 1) {
        slideIndex = totalGroups;
    } else {
        slideIndex = n;
    }
    
    // Move slides com animação
    const translateX = -(slideIndex - 1) * (100 / slidesToShow) * slidesToShow;
    
    if (!instant) {
        isAnimating = true;
        wrapper.style.transition = 'transform 0.5s ease';
    } else {
        wrapper.style.transition = 'none';
    }
    
    wrapper.style.transform = `translateX(${translateX}%)`;
    
    // Atualiza os dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideIndex-1].className += " active";
    
    // Reset da animação
    if (!instant) {
        setTimeout(() => {
            isAnimating = false;
        }, 500);
    }
}

// Controles próximo/anterior
function changeSlide(n) {
    clearTimeout(slideTimer);
    showSlides(slideIndex + n);
    startSlideTimer();
}

// Controle dos dots
function currentSlide(n) {
    clearTimeout(slideTimer);
    showSlides(n);
    startSlideTimer();
}

// Avança slides automaticamente
function startSlideTimer() {
    clearTimeout(slideTimer);
    slideTimer = setTimeout(() => {
        showSlides(slideIndex + 1);
        startSlideTimer();
    }, 3000); // Muda a cada 3 segundos para um efeito mais dinâmico
}

// Inicializa o slideshow quando a página carrega
document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.slides-wrapper');
    
    // Adiciona listener para o fim da transição
    wrapper.addEventListener('transitionend', () => {
        isAnimating = false;
    });
    
    showSlides(1);
    startSlideTimer();
}); 
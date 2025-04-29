document.addEventListener('DOMContentLoaded', () => {
    
    const myObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    });

    
    const sections = document.querySelectorAll('.hidden');
    sections.forEach((section) => myObserver.observe(section));

    
   
    const botao = document.getElementById('botao-comecar');

    botao.addEventListener('click', () => {
        const fotos = document.getElementById('imagens');
        fotos.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    });

    
    const raizes = document.getElementById('imagem13');
    const container = document.querySelector('.imagem-container');
    let clicou = false;

    raizes.addEventListener('click', () => {
        if (clicou) return;

        const novasRaizes = [
            './imgs/pj1.jpg',
            './imgs/pj2.jpg',
            './imgs/pj3.jpg',
            './imgs/pj4.jpg',
            './imgs/pj5.jpg',
            './imgs/pj.jpg',
        ];

        novasRaizes.forEach((src, index) => {
            const raiz = document.createElement('img');
            raiz.src = src;
            raiz.alt = `Raiz ${index + 1}`;
            raiz.classList.add('imagem', 'hidden'); 
            container.appendChild(raiz);

            setTimeout(() => {
                raiz.classList.add('show');
            }, index * 500); 
        });

        clicou = true;
    });
    
});


const toggleButton = document.getElementById('videos');
const videoContainer = document.getElementById('videoContainer');
const video = document.querySelector('.video');

toggleButton.addEventListener('click', () => {
    
    videoContainer.classList.toggle('video-visible');

    if (videoContainer.classList.contains('video-visible')) {
        video.style.display = 'block';
        video.play();
    } else {
        
        video.pause();
        video.currentTime = 0; 
        video.style.display = 'none';
    }
});






const images = document.querySelectorAll('.boxImg img');

// Função para gerar valores aleatórios dentro de um intervalo
function getRandomInRange(min, max) {
    return Math.random() * (max - min) + min;
}

// Função para aplicar estilos aleatórios em cada imagem
function randomizeImages() {
    images.forEach((img) => {
        const randomWidth = getRandomInRange(30, 600); // Tamanhos muito variados
        const randomTop = getRandomInRange(-300, window.innerHeight + 300); // Posição vertical ampla
        const randomLeft = getRandomInRange(-300, window.innerWidth + 300); // Posição horizontal ampla
        const randomRotation = getRandomInRange(-90, 90); // Rotação extrema
        const randomOpacity = getRandomInRange(0.1, 1); // Transparência variada

        // Aplicando os estilos
        img.style.width = `${randomWidth}px`;
        img.style.top = `${randomTop}px`;
        img.style.left = `${randomLeft}px`;
        img.style.transform = `rotate(${randomRotation}deg)`;
        img.style.opacity = randomOpacity;
    });
}

setInterval(randomizeImages, 5000);
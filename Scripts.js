let currentIndex = 0;
const slider = document.querySelector('.slider');
const totalCards = slider.children.length;
const maxIndex = totalCards - 3; // Mostrar 3 tarjetas a la vez

function moveSlider(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = maxIndex;
    } else if (currentIndex > maxIndex) {
        currentIndex = 0;
    }
    const slideWidth = slider.children[0].offsetWidth;
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// Movimiento automático cada 3 segundos
setInterval(() => {
    moveSlider(1); // Mueve el slider a la derecha
}, 3000);

// Eventos click para mover el slider manualmente
document.querySelector('.prev').addEventListener('click', () => moveSlider(-1));
document.querySelector('.next').addEventListener('click', () => moveSlider(1));
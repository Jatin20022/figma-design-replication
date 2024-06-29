let currentIndex = 0;

document.querySelector('.prev').addEventListener('click', () => {
    const cards = document.querySelectorAll('.card');
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = cards.length - 3;
    }
    updateSlider();
});

document.querySelector('.next').addEventListener('click', () => {
    const cards = document.querySelectorAll('.card');
    if (currentIndex < cards.length - 3) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateSlider();
});

function updateSlider() {
    const cardWidth = document.querySelector('.card').offsetWidth;
    const slider = document.querySelector('.card-slider');
    slider.style.transform = `translateX(${-currentIndex * (cardWidth + 20)}px)`;
}
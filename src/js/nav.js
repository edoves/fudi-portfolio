
document.getElementById('open').addEventListener('click', () => {
    const headerNav = document.querySelector('.header__nav');
    const thePage = document.querySelector('.the-page');
    headerNav.classList.add('moveIn');
    thePage.classList.add('move-left');

});

document.getElementById('close').addEventListener('click', () => {
    const headerNav = document.querySelector('.header__nav');
    const thePage = document.querySelector('.the-page');
    headerNav.classList.remove('moveIn');
    thePage.classList.remove('move-left');
});

// Testimonial Slider

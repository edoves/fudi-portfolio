document.getElementById('hide').addEventListener('click', () => {
    const note = document.querySelector('.note');

    const slideUp = (target) => {
        target.style.transform = 'translateY(-100%)';
        target.style.height = 0;
        target.style.paddingTop = 0;
        target.style.paddingBottom = 0;
        target.style.marginTop = 0;
        target.style.marginBottom = 0;
        target.style.overflow = 'hidden';
    }
    slideUp(note)

    // slideUp(note, 500);


});
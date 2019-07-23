const testimonialItems = document.querySelector('.testimonial__items');
const testimonialItem = Array.from(testimonialItems.children);
const sliderBtns = document.querySelector('.testimonial__btns');
const sliderBtn = Array.from(sliderBtns.children);

const itemWidth = testimonialItem[0].getBoundingClientRect().width;

testimonialItem.forEach((item, i) => {
    item.style.left = `${itemWidth * i}px`;
});


sliderBtns.addEventListener('click', (e) => {
    const targeSlideBtn = e.target.closest('button');
    if (!targeSlideBtn) return;

    const activeSlide = testimonialItems.querySelector('.active');
    const activeSlideBtn = sliderBtns.querySelector('.active');

    const targetBtnIndex = sliderBtn.findIndex(dot => {
        return dot === targeSlideBtn;
    });

    const targetSlide = testimonialItem[targetBtnIndex];

    testimonialItems.style.transform = `translateX(-${targetSlide.style.left})`;
    console.log(targetSlide.style.left)
    activeSlide.classList.remove('active');
    targetSlide.classList.add('active');

    // update slider Dot
    activeSlideBtn.classList.remove('active')
    targeSlideBtn.classList.add('active');

});
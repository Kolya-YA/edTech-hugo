const btnBTT = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    // console.log(window.scrollY > window.innerHeight * 0.75);
    const isBtnVisible = window.scrollY > window.innerHeight * 0.75;
    btnBTT.style.visibility = isBtnVisible ? 'visible' : 'hidden';
});

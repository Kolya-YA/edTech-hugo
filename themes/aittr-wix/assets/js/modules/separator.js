const separators = document.querySelectorAll('.separator');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('separator--visible');
        } else {
            entry.target.classList.remove('separator--visible');
        }
    });
});

separators.forEach((s) => {
    s.classList.remove('separator--visible');
    observer.observe(s);
});

const selectors = document.querySelectorAll('.modules__selector-item');
const modules = document.querySelectorAll('.modules__item');

const moduleSwitcher = (moduleID) => {
    selectors.forEach((sel) => {
        if (sel.dataset.moduleId === moduleID) {
            sel.classList.add('modules__selector-item--active');
        } else {
            sel.classList.remove('modules__selector-item--active');
        }
    });

    modules.forEach((mod) => {
        if (mod.dataset.moduleId === moduleID) {
            mod.classList.add('modules__item--active');
        } else {
            mod.classList.remove('modules__item--active');
        }
    });
};

selectors.forEach((s) => {
    s.addEventListener('click', (e) => {
        moduleSwitcher(e.target.dataset.moduleId);
    });
});

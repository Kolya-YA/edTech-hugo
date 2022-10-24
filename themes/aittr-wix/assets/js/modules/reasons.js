const reasons = document.querySelectorAll('.start-now__item');
const selctorsBlock = document.querySelector('.start-now__selectors');
const btnsTemplate = document.querySelector('#r-selector');
let startNo = 0;

reasons.forEach((r, i) => {
    const btnClone = btnsTemplate.content.cloneNode(true);
    const btn = btnClone.querySelector('button');
    btn.dataset.reasonNo = i;

    if (r.classList.contains('start-now__item--active')) {
        btn.classList.add('start-now__selector--active');
        startNo = i;
    }

    selctorsBlock.appendChild(btnClone);
});

const selectors = document.querySelectorAll('.start-now__selector');

const setActive = (activeNo) => {
    for (let i = 0; i < reasons.length; i += 1) {
        reasons[i].className = '';
        reasons[i].className = activeNo === i
            ? 'start-now__item start-now__item--active'
            : 'start-now__item';
        selectors[i].className = '';
        selectors[i].className = activeNo === i
            ? 'start-now__selector start-now__selector--active'
            : 'start-now__selector';
    }
};

const reasonsRotator = (startFrom) => {
    let activeNo = startFrom;
    const chooseItem = () => {
        activeNo = activeNo + 1 < reasons.length ? activeNo + 1 : 0;
        setActive(activeNo);
    };

    return window.setInterval(chooseItem, 8000);
    
};

let rot = reasonsRotator(startNo);

selctorsBlock.addEventListener('click', (event) => {
    const newStartNo = +event.target.dataset.reasonNo;
    setActive(newStartNo);
    clearInterval(rot);
    rot = reasonsRotator(newStartNo);
    event.stopPropagation();
    event.preventDefault();
});

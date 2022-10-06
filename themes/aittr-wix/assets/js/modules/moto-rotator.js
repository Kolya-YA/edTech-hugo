const listRotator = (list) => {
    const motoItems = list.children;
    let curItem = 0;

    const chooseItem = () => {
        curItem = curItem + 1 < motoItems.length ? curItem + 1 : 0;

        for (let i = 0; i < motoItems.length; i += 1) {
            motoItems[i].style.display = curItem === i ? 'list-item' : 'none';
        }
    };

    window.setInterval(chooseItem, 6000);
};

const topAnnounces = document.querySelector('.announce__list');

listRotator(topAnnounces);

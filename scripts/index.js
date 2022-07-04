const getarray = (c) => { return document.getElementsByClassName(c) };
const $ = (e) => { return document.querySelector(e) };

(function () {
    const sliders = getarray('testimony-body');
    const btnNext = $('#next');
    const btnBefore = $('#before');

    btnNext.addEventListener('click', () => {
        changePosition(1);
    });

    btnBefore.addEventListener('click', () => {
        changePosition(-1);
    });

    const changePosition = (add) => {
        const currentTestimony = $('.show').dataset.id;
        let value = Number(currentTestimony);
        sliders[value - 1].classList.remove('show');
        value += add;
        if (value === sliders.length + 1 || value === 0) {
            value = value === 0 ? sliders.length : 1;
        }
        sliders[value - 1].classList.add('show');
    };
    
    let intervalo_en_segundos = 10

    setInterval(changePosition, intervalo_en_segundos * 1000, 1)

})();

(function () {
    const btnCircle = getarray('quest-title');
    const questText = getarray('quest-text');

    for (let question of btnCircle) {
        question.addEventListener('click', () => {
            let height = 0;
            let answer = question.nextElementSibling;

            question.children[0].classList.toggle('quest-text-rotate');

            if (answer.clientHeight === 0) {
                height = answer.scrollHeight;
            }

            answer.style.height = `${height}px`;
        })
    };

})();

(function () {
    const menuImg = document.querySelector('.menu');
    const menu = document.querySelector('.nav-menu');
    const closeMenu = document.querySelector('#close');

    menuImg.addEventListener('click', () => {
        menu.classList.add('menu-show');
    });

    closeMenu.addEventListener('click', () => {
        menu.classList.remove('menu-show');
    })
})();


(function(){
    const sliders = [...document.querySelectorAll('.testimony-body')];
    const btnNext = document.querySelector('#next');
    const btnBefore = document.querySelector('#before');

    btnNext.addEventListener('click', () => {
        changePosition(1);
    });

    btnBefore.addEventListener('click', () => {
        changePosition(-1);
    });

    const changePosition = (add) => {
        const currentTestimony = document.querySelector('.show').dataset.id;
        let value = Number(currentTestimony);
        sliders[value-1].classList.remove('show');
        value += add;
        if (value === sliders.length + 1 || value === 0) {
            value = value === 0 ? sliders.length : 1;
        }
        sliders[value-1].classList.add('show');
    };
})();

(function(){
    const btnCircle = [...document.querySelectorAll('.quest-title')];
    const questText = [...document.querySelectorAll('.quest-text')];

     btnCircle.forEach(question => {
        question.addEventListener('click', () => {
            let height = 0;
            let answer = question.nextElementSibling;

            question.children[0].classList.toggle('quest-text-rotate');

            if (answer.clientHeight === 0) {
                height = answer.scrollHeight;
            }

            answer.style.height = `${height}px`;
        })
     })

})();

(function(){
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

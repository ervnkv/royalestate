// elementsPageName = 'section', 
// elementsMenuName = '.menu', 
// headerOffset = 80,
// elementProgressBgName = '.progress_bg'
export default function(headerOffset = 80, elementProgressBgName = '.progress_bg', elementsMenuName = '.menu') {

    document.addEventListener('scroll',() => {
        // Текущий верх страницы
        const currentTop = Math.ceil(document.documentElement.scrollTop+headerOffset);
        // Элементы меню
        const elementsMenu = document.querySelectorAll(elementsMenuName);
        // Ширина элементов меню
        const elementsMenuWidth = [];
        elementsMenu.forEach(element => {
            elementsMenuWidth.push(+window.getComputedStyle(element).width.replace('px',''));
        });
        // Количество элементов меню
        const menuCount = elementsMenuWidth.length;
        // Отступы прогресс-бара
        const menuMarginLeft = elementsMenuWidth[0]/2;
        const menuMarginRight = elementsMenuWidth[menuCount-1]/2;
        // Прогресс-бар
        const elementProgress = document.querySelector(elementProgressBgName);
        // Установка стилей прогресс-бару
        elementProgress.style['margin-left'] = menuMarginLeft+'px';
        elementProgress.style['margin-right'] = menuMarginRight+'px';

        console.log(currentTop);
    });
    
    // const elementsPage = document.querySelectorAll(elementsPageName);

    // Верх секций
    // const elementsPageTop = [];
    // elementsPage.forEach(element => {
    //     elementsPageTop.push(element.offsetTop);
    // });
    // Верх конца страницы
    // const maxTop = document.documentElement.scrollHeight-document.documentElement.clientHeight+headerOffset;
    // Замена верха последней секции
    // elementsPageTop[elementsPageTop.length-1] = Math.min(elementsPageTop[elementsPageTop.length-1],maxTop);
    

    
    // const menuWidth = elementsMenuWidth.reduce((a, b) => a + b, 0) - menuMarginLeft - menuMarginRight;

    
    

    // console.log(elementsMenu);
    
        // const docEl = document.documentElement;
        // const currentTop = docEl.scrollTop;
        // const maxTop = docEl.scrollHeight-docEl.clientHeight;
    
}
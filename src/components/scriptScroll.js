export default function(elementsPageName = 'section', elementsMenuName = '.menu', headerOffset = 80) {
    const elementsPage = document.querySelectorAll(elementsPageName);
    const elementsMenu = document.querySelectorAll(elementsMenuName);

    // Верх секций
    const elementsPageTop = [];
    elementsPage.forEach(element => {
        elementsPageTop.push(element.offsetTop);
    });
    // Верх конца страницы
    const maxTop = document.documentElement.scrollHeight-document.documentElement.clientHeight+headerOffset;
    // Замена верха последней секции
    elementsPageTop[elementsPageTop.length-1] = Math.min(elementsPageTop[elementsPageTop.length-1],maxTop);
    

    // Ширина элементов меню
    const elementsMenuWidth = [];
    elementsMenu.forEach(element => {
        elementsMenuWidth.push(+window.getComputedStyle(element).width.replace('px',''));
    });
    const menuCount = elementsMenuWidth.length;
    const menuMarginLeft = elementsMenuWidth[0]/2;
    const menuMarginRight = elementsMenuWidth[menuCount-1]/2;
    const menuWidth = elementsMenuWidth.reduce((a, b) => a + b, 0) - menuMarginLeft - menuMarginRight;



    // Текущий верх страницы
    // const currentTop = Math.ceil(document.documentElement.scrollTop+headerOffset);
    
    
    console.log(elementsMenuWidth,menuMarginLeft,menuMarginRight,menuWidth); 
    
    return({
        menuMarginLeft: menuMarginLeft,
        menuMarginRight: menuMarginRight,
    });

    // console.log(elementsMenu);
    // document.addEventListener('scroll',() => {
    //     const docEl = document.documentElement;
    //     const currentTop = docEl.scrollTop;
    //     const maxTop = docEl.scrollHeight-docEl.clientHeight;
    //     console.log();
    // });
}
export default function(elementsMenuName = '.menu') {
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
    const menuMarginLeft = Math.round(elementsMenuWidth[0]/2);
    const menuMarginRight = Math.round(elementsMenuWidth[menuCount-1]/2);
    return({
        menuMarginLeft: menuMarginLeft+'px',
        menuMarginRight: menuMarginRight+'px'
    });
}
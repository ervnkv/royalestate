export default function(elementsMenuName = '.menu', elementProgressName = '.progress_bg') {
    // Элементы меню
    const elementsMenu = document.querySelectorAll(elementsMenuName);
    // Ширина элементов меню
    const elementsMenuWidth = [];
    elementsMenu.forEach(element => {
        const style = getComputedStyle(element);
        const width = +style.width.replace('px','');
        const ml = +style.marginLeft.replace('px','');
        const mr = +style.marginRight.replace('px','');
        elementsMenuWidth.push(width+ml+mr);
    });
    // Количество элементов меню
    const menuCount = elementsMenuWidth.length;
    // Отступы прогресс-бара
    const menuMarginLeft = elementsMenuWidth[0]/2;
    const menuMarginRight = elementsMenuWidth[menuCount-1]/2;
    
    // Прогресс-бар
    const elementProgress = document.querySelector(elementProgressName);
    elementProgress.style.marginLeft = menuMarginLeft+'px'; 
    elementProgress.style.marginRight = menuMarginRight+'px';

    // Расстояния между элементами меню
    const elementsMenuCoord = [];
    let currSum = 0;
    for (let i=0; i<menuCount; i++ ) {
        if (i==0){
            elementsMenuCoord.push(currSum);
        }else{
            currSum += (elementsMenuWidth[i-1]+elementsMenuWidth[i])/2;
            elementsMenuCoord.push(currSum);
        }
    }
    return({elementsMenuCoord});
}
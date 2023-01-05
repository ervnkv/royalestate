export default function(headerOffset = 80, elementsPageName = 'section', elementsMenuCoord, elementProgressName = '.progress_solid') {
    document.addEventListener('scroll',() => {
        // Текущий верх страницы
        const currentTop = Math.ceil(document.documentElement.scrollTop+headerOffset);
        
        // Секции
        const elementsPage = document.querySelectorAll(elementsPageName);
        // Верх секций
        const elementsPageTop = [];
        elementsPage.forEach(element => {
            elementsPageTop.push(element.offsetTop);
        });
        // Верх конца страницы
        const maxTop = document.documentElement.scrollHeight-document.documentElement.clientHeight+headerOffset;
        // Замена верха последней секции
        elementsPageTop[elementsPageTop.length-1] = Math.min(elementsPageTop[elementsPageTop.length-1],maxTop);
        
        const menuCount = elementsMenuCoord.length;
        // console.log(elementsPageTop[0], elementsMenuCoord[0]);
        for (let i=0; i < menuCount; i++ ) {
            const currentMenu = elementsMenuCoord[i];
            const currentSection = elementsPageTop[i];
            
            if (currentTop < currentSection){
                
                const prevMenu = elementsMenuCoord[i-1];
                const prevSection = elementsPageTop[i-1];
                const lengthSection = currentSection - prevSection;
                const lengthMenu = currentMenu - prevMenu;
                const progressPlus = (currentTop-prevSection)/(lengthSection/lengthMenu);
                const progressFull = prevMenu + progressPlus;

                // Прогресс-бар
                const elementProgress = document.querySelector(elementProgressName);
                elementProgress.style.width = progressFull+'px';
                
                console.log(progressPlus);
                break;
            }
        }
    });
}
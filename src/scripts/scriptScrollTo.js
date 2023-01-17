export default function(elementsName='sections',headerOffset = 80,elementId) {
    const elements = document.querySelectorAll(elementsName);
    elements.forEach(element => {
        if (element.id == elementId) {
            document.documentElement.scrollTop = element.offsetTop-headerOffset;
        }
    });
}
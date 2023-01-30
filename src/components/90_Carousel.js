import React, {useRef, useEffect, useState} from 'react';
import './90_Carousel.scss';

export default function Carousel({htmlBlock}) {
	const containerRef = useRef();

	const [scrollWidth, setScrollWidth] = useState(0); // Полная ширина ref-контейнера
	const [clientWidth, setClientWidth] = useState(0); // Видимая ширина ref-контейнера
	const [scrollLeft, setScrollLeft] = useState(0); // Скролл ref-контейнера

	const [needScroll, setNeedScroll] = useState(); // Элемент поместился на экран полностью?

	const [btnLeft, setBtnLeft] = useState(); // Показать кнопку Влево
	const [btnRight, setBtnRight] = useState(); // Показать кнопку Вправо
	
	let prevX = 0;


	const startScroll = (e) => {
		const refEl = containerRef.current;
		prevX = (e.pageX);
		refEl.classList.add('grabbing');
		refEl.addEventListener('mousemove', scrolling);
		// console.log('START SCROLL');
	};
	const scrolling = (e) => {
		const refEl = containerRef.current;
		const deltaX = (prevX - e.pageX);
		const currentLeft = refEl.scrollLeft += deltaX*1.5 ;
		setScrollLeft(currentLeft);
		refEl.scrollTo({left: currentLeft, behavior: 'smooth'});
		prevX = (e.pageX);
		// checkButtons(currentLeft);
		// console.log(currentLeft ,'scrolling');
	};
	const stopScroll = () => {
		const refEl = containerRef.current;
		refEl.removeEventListener('mousemove', scrolling);
		refEl.classList.remove('grabbing');
		// console.log('STOP SCROLL');
	};


	// Показать кнопки Влево и Вправо
	const checkButtons = (scrollLeft) => {
		if (needScroll) {
			scrollLeft > 10 ? setBtnLeft(true) : setBtnLeft(false);
			scrollWidth < clientWidth + scrollLeft + 10 ? setBtnRight(false): setBtnRight(true);
		} else {
			setBtnLeft(false);
			setBtnRight(false);
		}
	};

	const moveBtn = (dir) => {
		const refEl = containerRef.current;
		let futureScrollLeft = 0;
		if (dir=='left') {
			futureScrollLeft = refEl.scrollLeft-clientWidth;
		} else {
			futureScrollLeft = refEl.scrollLeft+clientWidth;
		}
		refEl.scrollTo({left: futureScrollLeft, behavior: 'smooth' });
		// setScrollLeft(futureScrollLeft);
		checkButtons(futureScrollLeft);
	};


	// Срабатывает один раз при появлении компонента
	useEffect(() => {
		// html элемент
		const refEl = containerRef.current;
		// console.log('компонент загрузился', refEl);
		// записываем стейты размеров и скролла
		setScrollWidth(refEl.scrollWidth); 
		setClientWidth(refEl.clientWidth);
		setScrollLeft(refEl.scrollLeft);
		if (refEl.scrollWidth == refEl.clientWidth) { // контейнер полностью поместился на экран
			setNeedScroll(false);
		} else { // контейнеру нужен скролл
			setNeedScroll(true);
			refEl.classList.add('grab');
		}
	},[]);

	// Срабатывает каждый раз при обновлении needScroll
	useEffect(()=>{
		// html элемент
		const refEl = containerRef.current;
		checkButtons(refEl.scrollLeft);
		if (needScroll) {
			// console.log('добавил лисенеры', refEl);
			refEl.addEventListener('mousedown', startScroll);
			refEl.addEventListener('mouseup', stopScroll);
			refEl.addEventListener('mouseleave', stopScroll);
		}
		return () => {
			// console.log('убрал лисенеры', refEl);
			refEl.removeEventListener('mousedown', startScroll);
			refEl.removeEventListener('mouseup', stopScroll);
			refEl.removeEventListener('mouseleave', stopScroll);
		};
	},[needScroll]);

	// Срабатывает каждый раз при обновлении scrollLeft
	useEffect(()=>{
		// html элемент
		const refEl = containerRef.current;
		checkButtons(refEl.scrollLeft);
		refEl.addEventListener('touchstart', () => checkButtons(refEl.scrollLeft));
		refEl.addEventListener('touchmove', () => checkButtons(refEl.scrollLeft));
		refEl.addEventListener('touchend', () => checkButtons(refEl.scrollLeft));
	},[scrollLeft]);
	
	return(
		<div id='carousel-container' ref={containerRef} className='f-row container'>
			{htmlBlock}
			<button id='carousel-btn' onClick={()=>moveBtn('left')} className={btnLeft ? 'scroll-btn left active' : 'scroll-btn left'}/>
			<button id='carousel-btn' onClick={()=>moveBtn('right')} className={btnRight ? 'scroll-btn right active' : 'scroll-btn right'}/>
		</div>
	);

}
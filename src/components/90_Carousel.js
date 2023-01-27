import React, {useRef, useEffect, useState} from 'react';
import './90_Carousel.scss';

// Класс второго родителя - padding: 0 25px;
// Класс первого родителя - position: relative;
// .container
// 		{TextBlocks}
// 		.scroll-btn left
// 		.scroll-btn left


export default function Carousel({htmlBlock}) {
	const containerRef = useRef(null);

	const [scrollWidth, setScrollWidth] = useState(1); // Полная ширина ref-контейнера
	const [clientWidth, setClientWidth] = useState(1); // Видимая ширина ref-контейнера
	const [scrollLeft, setScrollLeft] = useState(0); // Скролл слева ref-контейнера

	const [fullScreen, setFullScreen] = useState(null); // Элемент поместился на экран полностью?

	const [btnLeft, setBtnLeft] = useState(false); // Показать кнопку Влево
	const [btnRight, setBtnRight] = useState(false); // Показать кнопку Вправо

	const [scrollStart, setScrollStart] = useState(false);
	const [prevX, setPrevX] = useState(0);

	const [cursorGrab, setCursorGrab] = useState(false);

	const startScroll = (e) => {
		setScrollStart(true);
		setPrevX(e.pageX);
		cursorGrab ? containerRef.current.classList.add('grabbing') : null;
	};
	const scrolling = (e) => {
		if(!scrollStart) return;
		const deltaX = (prevX - e.pageX);
		const currentLeft = containerRef.current.scrollLeft += deltaX ;
		containerRef.current.scrollTo({ left: currentLeft, top: 0, behavior: 'smooth' });
		setPrevX(e.pageX);
		checkButtons(currentLeft);	
		if (cursorGrab) {
			e.preventDefault();
		}
	};
	const stopScroll = () => {
		setScrollStart(false);
		containerRef.current.classList.remove('grabbing');
	};


	// Показать кнопки Влево и Вправо
	const checkButtons = (scrollLeft) => {
		if (fullScreen) {
			setBtnLeft(false);
			setBtnRight(false);
		} else {
			scrollLeft > 0 ? setBtnLeft(true) : setBtnLeft(false);
			scrollWidth == clientWidth + scrollLeft ? setBtnRight(false): setBtnRight(true);
		}

	};

	const checkCursor = () => {
		setCursorGrab(!(containerRef.current.scrollWidth == containerRef.current.clientWidth));
		cursorGrab ? containerRef.current.classList.add('grab') : containerRef.current.classList.remove('grab');
	};
	const movePrev = () => {
		const futureScrollLeft = scrollLeft-clientWidth;
		containerRef.current.scrollTo({ left: futureScrollLeft, behavior: 'smooth' });
		checkButtons(futureScrollLeft);
	};
	const moveNext = () => {
		const futureScrollLeft = scrollLeft+clientWidth;
		containerRef.current.scrollTo({ left: futureScrollLeft, behavior: 'smooth' });
		checkButtons(futureScrollLeft);
	};




	// Срабатывает один раз при появлении компонента
	useEffect(() => {
		// html элемент
		const refEl = containerRef.current;
		// записываем стейты размеров, скролла и фуллскрина, считать эти значение можно только при следующем рендеринге
		checkCursor();
		setScrollWidth(refEl.scrollWidth); 
		setClientWidth(refEl.clientWidth);
		setScrollLeft(refEl.scrollLeft);
		refEl.scrollWidth == refEl.clientWidth ? setFullScreen(true) : setFullScreen(false);
	},[]); 



	// Срабатывает каждый раз при обновлении fullScreen
	useEffect(()=>{
		// html элемент
		const refEl = containerRef.current;
		// стейт фуллскрина обновился, передаем это значение для отображения кнопок
		checkButtons();

		if (fullScreen) {
			refEl.addEventListener('mousedown', startScroll);
			refEl.addEventListener('mousemove', scrolling);
			refEl.addEventListener('mouseup', stopScroll);
			refEl.addEventListener('mouseleave', stopScroll);
		}
		return () => {
			refEl.removeEventListener('mousedown', startScroll);
			refEl.removeEventListener('mousemove', scrolling);
			refEl.removeEventListener('mouseup', stopScroll);
			refEl.removeEventListener('mouseleave', stopScroll);
		};

	},[fullScreen]);
	
	return(
		<div id='carousel-container' ref={containerRef} className='f-row container'>
			{htmlBlock}
			<button id='carousel-btn' onClick={movePrev} className={btnLeft ? 'scroll-btn left active' : 'scroll-btn left'}/>
			<button id='carousel-btn' onClick={moveNext} className={btnRight ? 'scroll-btn right active' : 'scroll-btn right'}/>
		</div>
	);

}
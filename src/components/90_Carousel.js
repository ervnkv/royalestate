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

	const [scrollStart, setScrollStart] = useState(false);
	const [prevX, setPrevX] = useState(0);
	const [btnLeft, setBtnLeft] = useState(false);
	const [btnRight, setBtnRight] = useState(false);
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
		checkScroll(currentLeft);	
		if (cursorGrab) {
			e.preventDefault();
		}
	};
	const stopScroll = () => {
		setScrollStart(false);
		containerRef.current.classList.remove('grabbing');
	};
	const checkScroll = (scrollLeft) => {
		const clientWidth = containerRef.current.clientWidth;
		const scrollWidth = containerRef.current.scrollWidth;
		scrollLeft > 10 ? setBtnLeft(true) : setBtnLeft(false);
		scrollWidth - clientWidth < scrollLeft + 10 ? setBtnRight(false): setBtnRight(true);
	};
	const checkCursor = () => {
		setCursorGrab(!(containerRef.current.scrollWidth == containerRef.current.clientWidth));
		cursorGrab ? containerRef.current.classList.add('grab') : containerRef.current.classList.remove('grab');
	};
	const movePrev = () => {
		const clientWidth = containerRef.current.clientWidth;
		const scrollLeft = containerRef.current.scrollLeft;
		const futureScrollLeft = scrollLeft-clientWidth;
		containerRef.current.scrollTo({ left: futureScrollLeft, behavior: 'smooth' });
		checkScroll(futureScrollLeft);
	};
	const moveNext = () => {
		const scrollLeft = containerRef.current.scrollLeft;
		const clientWidth = containerRef.current.clientWidth;
		const futureScrollLeft = scrollLeft+clientWidth;
		containerRef.current.scrollTo({ left: futureScrollLeft, behavior: 'smooth' });
		checkScroll(futureScrollLeft);
	};
	useEffect(() => {
		!btnLeft && !btnRight ? checkScroll(containerRef.current.scrollLeft) : '';
		checkCursor();
		containerRef.current.addEventListener('mousedown', startScroll);
		containerRef.current.addEventListener('mousemove', scrolling);
		containerRef.current.addEventListener('mouseup', stopScroll);
		containerRef.current.addEventListener('mouseleave', stopScroll);
		containerRef.current.addEventListener('touchstart', () => checkScroll(containerRef.current.scrollLeft));
		containerRef.current.addEventListener('touchmove', () => checkScroll(containerRef.current.scrollLeft));
		containerRef.current.addEventListener('touchend', () => checkScroll(containerRef.current.scrollLeft));
		return () => {
			containerRef.current.removeEventListener('mousedown', startScroll);
			containerRef.current.removeEventListener('mousemove', scrolling);
			containerRef.current.removeEventListener('mouseup', stopScroll);
			containerRef.current.removeEventListener('mouseleave', stopScroll);
		};
	});
	
	return(
		<div id='carousel-container' ref={containerRef} className='f-row container'>
			{htmlBlock}
			<button id='carousel-btn' onClick={movePrev} className={btnLeft ? 'scroll-btn left active' : 'scroll-btn left'}/>
			<button id='carousel-btn' onClick={moveNext} className={btnRight ? 'scroll-btn right active' : 'scroll-btn right'}/>
		</div>
	);
}
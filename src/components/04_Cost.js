import React, {useRef, useEffect, useState} from 'react';
import './04_Cost.scss';


export default function Cost({TextBlocks,Title,ID,openCall,setPackageName}) {
	const containerRef = useRef(null);
	const cardRef = useRef(null);

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


	const htmlTextBlock = TextBlocks.map(({head,content,priceMain,priceSecond,id}) =>{
		return(
			<div 
			key={id}
			ref={cardRef} 
			className='f-column t-center card'>
				<div className='f-column headText'>
					<h4>{head}</h4>
				</div>
				<p>{content}</p>
				<div className='f-column price'>
					<h4>{priceMain}</h4>
					<h4>{priceSecond}</h4>
				</div>
				<button onClick={()=>{
					setPackageName(head);
					openCall();
					}}>
					<h5>Оставить заявку</h5>
				</button>
			</div>
		);
	});
	
	return(
		<section id={ID} className='f-column cost'>
			<h2>{Title}</h2>
			<div
			ref={containerRef}
			className='f-row container'>
				{htmlTextBlock}	
			</div>
			<button onClick={movePrev} className={btnLeft ? 'scroll-btn left active' : 'scroll-btn left'}/>
			<button onClick={moveNext} className={btnRight ? 'scroll-btn right active' : 'scroll-btn right'}/>
		</section>
	);
}



import React, {useRef, useEffect, useState} from 'react';
import './04_Cost.scss';


export default function Cost({TextBlocks,Title,ID,openCall,setPackageName}) {
	const containerRef = useRef(null);
	const [scrollStart, setScrollStart] = useState(false);
	const [currentX, setCurrentX] = useState(0);
	const [btnLeft, setBtnLeft] = useState(false);
	const [btnRight, setBtnRight] = useState(false);
	
	const startScroll = (e) => {
		setScrollStart(true);
		setCurrentX(e.pageX || e.touches[0].pageX);
		console.log();
	};

	const scrolling = (e) => {
		if(!scrollStart) return;
		e.preventDefault();

		const deltaX = currentX - (e.pageX || e.touches[0].pageX);

		//не плавно
		// containerRef.current.scrollLeft += deltaX;
		// плавно
		const currentLeft = containerRef.current.scrollLeft += deltaX;
		containerRef.current.scrollTo({ left: currentLeft, top: 0, behavior: 'smooth' });

		setCurrentX(e.pageX || e.touches[0].pageX);

		checkBtnScroll();


		
	};

	const stopScroll = () => {
		setScrollStart(false);
	};

	const checkBtnScroll = () => {
		containerRef.current.scrollLeft > 0 ? setBtnLeft(true) : setBtnLeft(false);
		containerRef.current.scrollWidth - containerRef.current.clientWidth == containerRef.current.scrollLeft ? setBtnRight(false): setBtnRight(true);
	};

	useEffect(() => {
		checkBtnScroll();

		containerRef.current.addEventListener('mousedown', startScroll);
		containerRef.current.addEventListener('mousemove', scrolling);
		containerRef.current.addEventListener('mouseup', stopScroll);
		containerRef.current.addEventListener('mouseleave', stopScroll);

		containerRef.current.addEventListener('touchstart', startScroll);
		containerRef.current.addEventListener('touchmove', scrolling);
		containerRef.current.addEventListener('touchend', stopScroll);

		return () => {
			containerRef.current.removeEventListener('mousedown', startScroll);
			containerRef.current.removeEventListener('mousemove', scrolling);
			containerRef.current.removeEventListener('mouseup', stopScroll);
			containerRef.current.removeEventListener('mouseleave', stopScroll);

			containerRef.current.removeEventListener('touchmove', scrolling);
			containerRef.current.removeEventListener('touchstart', startScroll);
			containerRef.current.removeEventListener('touchend', stopScroll);
		};
	});


	const htmlTextBlock = TextBlocks.map(({head,content,priceMain,priceSecond,id}) =>{
		return(
			<div 
			key={id} 
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
			className={scrollStart ? 'f-row container scrolling' : 'f-row container'}>
				{htmlTextBlock}	
			</div>
			<button className={btnLeft ? 'scroll-btn left active' : 'scroll-btn left'}/>
			<button className={btnRight ? 'scroll-btn right active' : 'scroll-btn right'}/>
		</section>
	);
}



import React from 'react';
import './04_Cost.scss';

import Carousel from './90_Carousel.js';


export default function Cost({TextBlocks,Title,ID,openCall,setPackageName}) {

	const htmlTextBlock = TextBlocks.map(({head,content,priceMain,priceSecond,best,id}) =>{
		return(
			<div 
			key={id}
			className={best?'f-column t-center card  best':'f-column t-center card'}>
				<div className='f-column headText'>
					<h4>{head}</h4>
				</div>
				<p>{content}</p>
				<div className='f-column price'>
					<h4>{priceMain}</h4>
					<h5>{priceSecond}</h5>
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
			<div className='wrapper'>
				<Carousel htmlTextBlock={htmlTextBlock}/>
			</div>
		</section>
	);
}



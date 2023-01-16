import React from 'react';
import './04_Cost.scss';


export default function Cost({TextBlocks,Title,ID,openCall,setPackageName}) {
	const htmlTextBlock = TextBlocks.map(({head,content,priceMain,priceSecond,id}) =>{
		return(
			<div key={id} className='card f-column t-center'>
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
		<section id={ID} className='f-column cost '>
			<h2>{Title}</h2>
			<div className='f-row container '>
				{htmlTextBlock}	
			</div>	
		</section>
	);
}



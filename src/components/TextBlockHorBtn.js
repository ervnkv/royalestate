import React from 'react';
import './TextBlockHorBtn.scss';


export default function TextBlockHorBtn({TextBlocks,Title,ID}) {
	const htmlTextBlock = TextBlocks.map(({head,content,priceMain,priceSecond,id}) =>{
		return(
			<div key={id} className='card f-column t-center'>
				<div className='f-column headText'>
					<h3>{head}</h3>
				</div>
				<p>{content}</p>
				<div className='f-column price'>
					<h2>{priceMain}</h2>
					<h3>{priceSecond}</h3>
				</div>
				<button>
					<h4>Оставить заявку</h4>
				</button>
			</div>
		);
	});
	
	return(
		<section id={ID} className='f-column textblockbtn '>
			<h2>{Title}</h2>
			<div className='f-row container '>
				{htmlTextBlock}	
			</div>	
		</section>
	);
}



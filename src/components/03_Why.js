import React from 'react';
import './03_Why.scss';


export default function Why({TextBlocks,Title,ID}) {
	const htmlTextBlock = TextBlocks.map(({head,content,img,imgAlt,id}) =>{
		return(
			<div key={id} className='f-column t-center card'>
				<img src={img} alt={imgAlt}></img>
				<div className='f-column headText'>
					<h4>{head}</h4>
				</div>
				<p>{content}</p>
			</div>
		);
	});
	return(
		<section id={ID} className='f-column why'>
			<h2>{Title}</h2>
			<div className='wrapper'>
				<div className='f-row container'>
					{htmlTextBlock}
				</div>
			</div>
		</section>
	);
}



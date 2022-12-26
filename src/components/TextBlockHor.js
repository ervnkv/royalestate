import React from 'react';
import './TextBlockHor.scss';


export default function TextBlockHor({TextBlocks,Title}) {
	const htmlTextBlock = TextBlocks.map(({head,content,img,imgAlt,id}) =>{
		return(
			<div key={id} className='card f-column t-center'>
				<img src={img} alt={imgAlt}></img>
				<div className='f-column headText'>
					<h3>{head}</h3>
				</div>
				<p>{content}</p>
			</div>
		);
	});
	
	return(
		<section className='f-column textblock '>
			<h2>{Title}</h2>
			<div className='f-row container '>
				{htmlTextBlock}	
			</div>	
		</section>
	);
}



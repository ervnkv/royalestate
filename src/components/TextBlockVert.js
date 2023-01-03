import React from 'react';
import './TextBlockVert.scss';


export default function TextBlockVert({TextBlocks,Title,ID}) {
	const htmlTextBlock = TextBlocks.map(({head,content,id}) =>{
		return(
			<div key={id} className='f-row card'>
				<div className='headText'>
					<h3>{head}</h3>
				</div>
				<p>{content}</p>
			</div>
		);
	});
	
	return(
		<section id={ID} className='f-column textblockvert '>
			<h2>{Title}</h2>
			<div className='f-column container '>
				{htmlTextBlock}	
			</div>	
		</section>
	);
}



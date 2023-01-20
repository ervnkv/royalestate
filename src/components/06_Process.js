import React from 'react';
import './06_Process.scss';


export default function Process({TextBlocks,Title,ID}) {
	const htmlTextBlock = TextBlocks.map(({head,content,id}) =>{
		return(
			<div key={id} className='f-row card'>
				<div className='f-row headText'>
					<div className='round'/>
					<h4>{head}</h4>
				</div>
				<p>{content}</p>
			</div>
		);
	});
	
	return(
		<section id={ID} className='f-column process '>
			<h2>{Title}</h2>
			<div className='wrapper'>
				<div className='f-column container '>
					{htmlTextBlock}	
				</div>
			</div>
		</section>
	);
}



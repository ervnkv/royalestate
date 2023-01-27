import React from 'react';
import './07_Process.scss';


export default function Process({Content,Title,ID}) {
	const htmlBlock = Content.map(({head,content,id}) =>{
		return(
			<div key={id} className='f-column card'>
				<div  className='f-row headText'>
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
				<div className='f-row container '>
					{htmlBlock}	
				</div>
			</div>
		</section>
	);
}


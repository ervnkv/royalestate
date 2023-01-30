import React from 'react';
import './07_Process.scss';


export default function Process({Content,Title,ID}) {
	const htmlBlock = Content.map(({head,subtitle,content,id}) =>{
		return(
			<div key={id} className='f-column card'>
				<div  className='f-row headText front'>
					<h4>{head}</h4>
				</div>
				<div className='f-row headText back'>
					<h4>{subtitle}</h4>
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



import React from 'react';
import './03_Why.scss';

import Carousel from './90_Carousel.js';

export default function Why({Content,Title,ID}) {
	const htmlBlock = Content.map(({head,content,img,imgAlt,id}) =>{
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
				<Carousel htmlBlock={htmlBlock}/>
			</div>
		</section>
	);
}



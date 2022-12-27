import React from 'react';
import './Contacts.scss';


export default function Contacts({Socials,Title}) {
	const htmlTextBlock = Socials.map(({link,img,imgAlt,id}) =>{
		return(
			<div key={id} className='social'>
				<a href={link}> 
					<img src={img} alt={imgAlt}></img>
				</a>
			</div>
		);
	});
	
	return(
		<section className='f-column contacts'>
			<h2>{Title}</h2>
			<div className='f-row container'>
				<button>
					<h4>Оставить заявку</h4>
				</button>
				{htmlTextBlock}	
				<h2>+7 (812) 425-33-42</h2>
			</div>	
		</section>
	);
}



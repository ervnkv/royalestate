import React from 'react';
import './Contacts.scss';


export default function Contacts({Socials,Title,ID}) {
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
		<section id={ID} className='f-column contacts'>
			<h2>{Title}</h2>
			<div className='f-row container'>
				<button>
					<h5>Оставить заявку</h5>
				</button>
				{htmlTextBlock}	
				<h3>+7 (812) 425-33-42</h3>
			</div>	
		</section>
	);
}



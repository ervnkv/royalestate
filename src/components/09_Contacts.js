import React from 'react';
import './09_Contacts.scss';


export default function Contacts({Content,Title,ID,openCall}) {
	const htmlBlock = Content.map(({link,img,imgAlt,id}) =>{
		return(
			<div key={id} className='social'>
				<a href={link}> 
					<img src={img} alt={imgAlt} className='social-img'></img>
				</a>
			</div>
		);
	});
	
	return(
		<section id={ID} className='f-column contacts'>
			<h2>{Title}</h2>
			<div className='wrapper'>
				<div className='f-row container'>
					<button onClick={()=>openCall()}>
						<h5>Оставить заявку</h5>
					</button>
					<div className='f-row social-container'>
						{htmlBlock}
					</div>
					<a href='tel:+78124253342'>+7 (812) 425-33-42</a>
				</div>
			</div>	
		</section>
	);
}



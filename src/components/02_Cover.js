import React from 'react';
import './02_Cover.scss';


export default function Cover({ID,openCall}) {
	return(
		<section id={ID} className='cover'>
				<div className='f-row container'>
					<div className='f-row content'>
						<div className='f-column text'>
							<h2>ВЫ УВЕРЕНЫ, ЧТО ЗАСТРОЙЩИК СДАСТ КВАРТИРУ <mark>БЕЗ ДЕФЕКТОВ</mark>?</h2>
							<button onClick={()=>openCall()}>
								<h5>Свяжитесь с нами</h5>
							</button>
						</div>
					</div>
					
				</div>	
		</section>
	);
}



import React from 'react';
import './02_Cover.scss';


export default function Cover({ID,openCall,setPackageName}) {
	return(
		<section id={ID} className='cover'>
				<div className='f-row container'>
					<div className='f-row content'>
						<div className='f-column text'>
							<h2>КУПИЛИ КВАРТИРУ С ДЕФЕКТАМИ?</h2>
							<button onClick={()=>{
								setPackageName();
								openCall();
								}}>
								<h5>Свяжитесь с нами</h5>
							</button>
						</div>
						<img src="../../img/cover-img.png" alt="cover-img"></img>
					</div>
					
				</div>	
		</section>
	);
}



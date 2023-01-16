import React from 'react';
import './10_CallBtn.scss';

export default function CallBtn({openCall,setPackageName}) {
	return(
		<div className='callBtn'>
			<button onClick={()=>{
					setPackageName();
					openCall();
					}}>
				<h5>Оставить заявку</h5>
			</button>
		</div>
	);
}
import React from 'react';
import './11_CallBtn.scss';

export default function CallBtn({openCall}) {
	return(
		<div className='callBtn'>
			<button onClick={()=>openCall()}>
				<h5>Оставить заявку</h5>
			</button>
		</div>
	);
}
import React from 'react';
import './Calculator.scss';


export default function Calculator({Title}) {
	return(
		<section className='f-column calculator'>
			<h2>{Title}</h2>
			<div className='f-row container'>
				<img src='../../img/icons/floorplan.png' alt='floorplan'></img>
				<div className='f-column calc'>
					<div className='f-row'>
						<h3>Площадь квартиры</h3>
						<input>000</input>
					</div>
					<div className='f-row'>
						<h3>Площадь квартиры</h3>
						<input>000</input>
					</div>
					<div className='f-row'>
						<h3>Площадь квартиры</h3>
						<input>000</input>
					</div>
				</div>
			</div>	
		</section>
	);
}



import React from 'react';
import './03.1_Defects.scss';

export default function Defects({Title,ID}) {
	return(
		<section id={ID} className='defects'>
			<h2>{Title}</h2>
			<div className='wrapper'>
				<div className='f-row container'>
					<div className='f-column info'>
						<h3>Входные двери</h3>
						<p>Неисправные замки, заедающая ручка, люфт входной двери, несоответствие проема дверной коробе</p>
						<div className='photo'/>
						{/* <img src='../img/icons/gesturing.svg' alt='{imgAlt}'></img> */}
					</div>

					<div className='map'>
						<div className='point 1' style={{right: '20px', top: '20px'}}/>
						<div className='point 2' style={{right: '80px', top: '20px'}}/>
						<div className='point 3' style={{right: '20px', top: '150px'}}/>
						<div className='point 4' style={{right: '80px', top: '90px'}}/>
					</div>
				</div>
			</div>
		</section>
	);
}



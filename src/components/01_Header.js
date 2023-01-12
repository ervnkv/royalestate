import React, {useState} from 'react';
import './01_Header.scss';
import scriptScrollTo from '../scripts/scriptScrollTo.js';

export default function Header({TextBlocks}) {
 
	const [OpenMenu, onOpenMenu] = useState(false);

	let htmlTextBlock = TextBlocks.map(({head,link,id}) =>{
		return(
			<li 
			className='menu'
			key={id}
			onClick = {() => {
				scriptScrollTo('section',80,link);	
			}}
			>{head}</li>
		);
	});
	

	return(
		<header className='header'>
			<div className='f-row wrapper'>
				
				<div className='f-row header_logo'>
					<img width={80} height={80} src="/img/logo.svg" alt="Logo" />
					<div className='header_logo_text'>
						<h1>ГРИФ</h1>
						<p>Юридическая компания</p>
					</div> 
				</div>

				<div className='menu-btn' onClick={() => onOpenMenu(!OpenMenu)}>	
				</div>

				<div className={OpenMenu ? 'menu-container active' : 'menu-container'}>
					<div className='f-column menu-list'>
						{htmlTextBlock}
					</div>
				</div>

			</div>	
		</header>
	);
	
}








import React from 'react';
import './Header.scss';
import scriptScrollTo from './scriptScrollTo.js';
import scriptScroll from './scriptScroll.js';

export default function Header({TextBlocks}) {
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
	
	
	const {menuMarginLeft, menuMarginRight} = scriptScroll('section', '.menu', 80);
	const elementProgress = document.querySelector('.progress_bg');
	elementProgress.style['margin-left'] = menuMarginLeft+'px';
	elementProgress.style['margin-right'] = menuMarginRight+'px';

	return(
		<header className='header'>
			<div className='f-row wrapper'>
				<div className='f-row header_logo'>
					<img width={80} height={80} src="/img/logo.svg" alt="Logo" />
					<div className='header_logo_text'>
						<h2>КЕДР</h2>
						<p>оценка квартир</p>
					</div> 
				</div>

				<ul className='f-column'>
					<div className='f-row'>
						{htmlTextBlock}
					</div>
					
					<div className='progress_bg'>
						<div className='progress_solid'>
						</div>
					</div>
				</ul>

				<h2>+7 (812) 425-33-42</h2>
			</div>	
		</header>
	);
}







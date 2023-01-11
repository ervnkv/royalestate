import React, {useEffect} from 'react';
import './Header.scss';
import scriptScrollTo from './scriptScrollTo.js';
import scriptScroll from './scriptScroll.js';
import scriptProgressMargin from './scriptProgressMargin.js';


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


	useEffect(() => {
		const {elementsMenuCoord} = scriptProgressMargin('.menu', '.progress_bg');
		scriptScroll(80, 'section', elementsMenuCoord, '.progress_solid');
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

				<ul className='f-column header-menu'>
					<div className='f-row'>
						{htmlTextBlock}
					</div>
					
					<div className='progress_bg'>
						<div className='progress_solid'>
						</div>
					</div>
				</ul>

				{/* <h3>+7 (812) 425-33-42</h3> */}
			</div>	
		</header>
	);
	
}








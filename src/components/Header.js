import React from 'react';
import './Header.scss';

export default function Header({TextBlocks}) {
	let htmlTextBlock = TextBlocks.map(({head,id}) =>{
		return(
			<li key={id}>{head}</li>
		);
	});
	
	
	return(
		<header className='header'>
			<div className='wrapper f-row'>
				<div className='header_logo f-row'>
					<img width={80} height={80} src="/img/logo.svg" alt="Logo" />
					<div className='header_logo_text'>
						<h2>КЕДР</h2>
						<p>оценка квартир</p>
					</div> 
				</div>

				<ul>
					{htmlTextBlock}
				</ul>

				<h2>+7 (812) 425-33-42</h2>
			</div>	
		</header>
	);
}
import React from 'react';
import './Header.scss';

export default function Header({TextBlocks}) {
	let htmlTextBlock = TextBlocks.map(({head,link,id}) =>{
		return(
			<a key={id} href={link}>{head}</a>
		);
	});
	
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

				<ul>
					{htmlTextBlock}
				</ul>

				<h2>+7 (812) 425-33-42</h2>
			</div>	
		</header>
	);
}
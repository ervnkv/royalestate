import React, {useState} from 'react';
import './01_Header.scss';

export default function Header({Content,openCall}) {
	const [OpenMenu, onOpenMenu] = useState(false);

	const scrollTo = (elementId) => {
		const element = document.querySelector(`#${elementId}`);
		const header = document.querySelector('header');
		document.documentElement.scrollTo({top: element.offsetTop-header.clientHeight, behavior: 'smooth'});
	};


	let htmlBlock = Content.map(({head,link,id}) =>{
		return(
			<li 
			className='menu'
			key={id}
			onClick = {() => scrollTo(link)}
			>
				{head}
			</li>
		);
	});


	return(
		<header className='header'>
			<div className='f-row wrapper'>
				<img width={80} height={80} src="/img/logo.svg" alt="ГРИФ - Юридическая компания. Логотип" />

				<div className='header_logo_text'>
					<h1>ГРИФ</h1>
					<p>Юридическая компания</p>
				</div> 

				<div className='call-btn' onClick={()=>openCall()}>
				</div>
				
				<div
				className='menu-btn' 
				onClick={()=>onOpenMenu(!OpenMenu)}>
				</div>
				<div 
				className={OpenMenu ? 'menu-container active' : 'menu-container'}
				onMouseLeave={()=>onOpenMenu(!OpenMenu)}
				>
					<div className='f-column menu-list'>
						{htmlBlock}
					</div>
				</div>

			</div>	
		</header>
	);
	
}








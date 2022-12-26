import React from 'react';
import './Header.scss';

function Header() {
	return(
		<header className='header'>
			<div className='wrapper f-row'>
				<div className='header_logo f-row'>
					<img width={80} height={80} src="/img/logo.png" alt="Logo" />
					<div className='header_logo_text'>
						<h2>КЕДР</h2>
						<p>оценка квартир</p>
					</div> 
				</div>

				<ul>
					<li>Акции</li>
					<li>Услуги</li>
					<li>Оценка для банка</li>
					<li>Оборудование</li>
					<li>О нас</li>
					<li>Контакты</li>
				</ul>

				<h2>+7 (812) 425-33-42</h2>
			</div>	
		</header>
	);
}
export default Header;
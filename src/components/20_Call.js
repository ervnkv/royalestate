import React from 'react';
import './20_Call.scss';

export default function Call({open, onClose}) {
	return(
		<div className={open ? 'overlay active' : 'overlay'} onClick={onClose}>
			<div className="f-column overlay-content" onClick={(e) => e.stopPropagation()}>
				<h3>Пожалуйста, оставьте Ваши<br></br> контактные данные</h3>
				<div className='f-column form'>
					<label>Номер телефона</label>
					<input type='tel' name='tel' placeholder='+7 000 000 00 00' autoFocus/>
				</div>
				<div className='f-column send'>
					<button onClick={onClose}>
						<h4>Отправить</h4>
					</button>
					<p>Наш сотрудник перезвонит Вам в ближайшее время</p>
				</div>
			</div>
		</div>
	);
}
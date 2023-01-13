import React,{useEffect} from 'react';
import './20_Call.scss';

export default function Call ({onClose}) {
	
	useEffect(() => {
		function handleEscapeKey(event='KeyboardEvent') {
			if (event.code === 'Escape') {
				onClose();
			}
		}
		document.addEventListener('keydown', handleEscapeKey);
		return () => document.removeEventListener('keydown', handleEscapeKey);
	}, []);

	return(
		<div className='overlay' onClick={onClose}>
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
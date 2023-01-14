import React,{useEffect} from 'react';
import './20_Call.scss';
import emailjs from '@emailjs/browser';

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

	const sendMessage = (e) => {
		e.preventDefault();
		emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_PUBLIC_KEY);
	};

	return(
		<div className='overlay' onClick={onClose} onSubmit={sendMessage}>
			<form className="f-column overlay-content" onClick={(e) => e.stopPropagation()}>
				<h3>Пожалуйста, оставьте Ваши<br></br> контактные данные</h3>
				<div className='f-column form'>
					<label>Номер телефона</label>
					<input type='tel' name='tel' placeholder='+7 000 000 00 00' autoFocus/>
				</div>
				<div className='f-column send'>
					{/* <button type='submit' onClick={onClose}> */}
					<button type='submit'>
						<h4>Отправить</h4>
					</button>
					<p>Наш сотрудник перезвонит Вам в ближайшее время</p>
				</div>
			</form>
		</div>
	);

}
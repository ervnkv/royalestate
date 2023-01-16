import React,{useEffect,useState} from 'react';
import './20_Call.scss';
import loader from '../lib/loader';
import emailjs from '@emailjs/browser';

export default function Call ({onClose}) {
	const [content, setContent] = useState(callOpen());

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
		setContent(loader());
		// emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_PUBLIC_KEY)
		emailjs.sendForm('service_2j66r8c', 'template_durs7aa', e.target, 'IQHEnzdEtP0OZ29h4')
			.then(() => {setContent(callFinish('Ваша заявка на обратный звонок отправлена!', 'Наш сотрудник перезвонит Вам в ближайшее время'));})
			.then(setTimeout(onClose,5000));
	};

	return(
		<div className='overlay' onClick={onClose} onSubmit={sendMessage}>
			<form className="f-column overlay-content" onClick={(e) => e.stopPropagation()}>
				{content}
			</form>
		</div>
	);
}

function callOpen() {
	return(
		<>
			<h3>Оставьте свои контактные данные<br></br>и мы с вами свяжемся</h3>
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
		</>
	);
}

function callFinish(mainText, secondText) {
	return(
		<div className='f-column message'>
			<h3>{mainText}</h3>
			<p>{secondText}</p>
		</div>
	);
}

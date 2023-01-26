import React,{useEffect,useState} from 'react';
import './20_Call.scss';
import loader from '../lib/loader';
import emailjs from '@emailjs/browser';

export default function Call ({onClose, packageName}) {
	const [content, setContent] = useState(callOpen(packageName));
	
	let timerID = null;

	const handleEscapeKey = (event='KeyboardEvent') => {
		if (event.code === 'Escape') {
			clearTimeout(timerID);
			onClose();
		}
	};
	
	useEffect(() => {
		document.querySelector('body').classList.add('scrollstop');
		document.addEventListener('keydown', handleEscapeKey);

		return () => {
			document.querySelector('body').classList.remove('scrollstop');
			document.removeEventListener('keydown', handleEscapeKey);
			clearTimeout(timerID);
		};
	},[]);

	const sendMessage = (e) => {
		e.preventDefault();
		setContent(loader());
		emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_PUBLIC_KEY)
			.then(() => setContent(callFinish('Ваша заявка на обратный звонок отправлена!', 'Наш сотрудник перезвонит Вам в ближайшее время')),
				error => {
					setContent(callFinish('Что-то пошло не так! Свяжитесь с нами любым удобным способ, контакты внизу страницы', 'Свяжитесь с нами любым удобным способ, контакты внизу страницы'));
					console.log(error);	
				})
			.then(()=>{
				timerID = setTimeout(onClose,5000);
			});
	};

	return(
		<div 
		className='overlay'
		onClick={()=>onClose()} 
		onSubmit={sendMessage}
		>
			<form className="f-column overlay-content" onClick={(e) => e.stopPropagation()}>
				{content}
			</form>
		</div>
	);
}

function callOpen(packageName) {
	return(
		<>
			<h3>Оставьте свои контактные данные<br></br>и мы с вами свяжемся</h3>
			<div className='f-column form'>
				<label>Ваше имя</label>
				<input name='name' type='name' placeholder='Артем Александрович'/>
				<label style={{marginTop: '20px'}}>Номер телефона</label>
				<input name='tel' type='tel' required placeholder='+7 000 000 00 00'/>
			</div>
			<div className='f-column send'>
				<button type='submit'>
					<h4>Отправить</h4>
				</button>
				<input type='hidden' name='package' value={packageName===''? '[Без пакета]':`[${packageName}]`}></input>
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

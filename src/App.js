import React,{useState} from 'react';

import Header from './components/01_Header.js';
import Cover from './components/02_Cover.js';
import Why from './components/03_Why.js';
import Cost from './components/04_Cost.js';
import Calculator from './components/05_Calculator.js';
import Process from './components/06_Process.js';
import QA from './components/07_QA.js';
import Contacts from './components/08_Contacts.js';
import Footer from './components/09_Footer.js';
import Call from './components/20_Call.js';



// Верстка сайта
export default function App(){
	const [isCallOpen, setCallOpen] = useState(false);
	return (
		<>
			<Header TextBlocks={TextBlockContent0}/>
			<Cover ID='section-0' openCall={() => setCallOpen(true)}/>
			<div id='main' className='wrapper'>
				<Why TextBlocks={TextBlockContent1} Title='ЗАЧЕМ' ID='section-1'/>
				<Cost TextBlocks={TextBlockContent2} Title='СКОЛЬКО Я ПОТРАЧУ' ID='section-2' openCall={() => setCallOpen(true)}/>
				<Calculator Title='СКОЛЬКО Я ПОЛУЧУ' ID='section-3'/>
				<Process TextBlocks={TextBlockContent3} Title='ПРОЦЕСС СОТРУДНИЧЕСТВА' ID='section-4'/>
				<QA TextBlocks={TextBlockContent4} Title='ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ' ID='section-5'/>
				<Contacts Socials={Socials} Title='СВЯЖИТЕСЬ С НАМИ' ID='section-6' openCall={() => setCallOpen(true)}/>
			</div>
			<Footer/>
			<Call open={isCallOpen} onClose={() => setCallOpen(false)}/>						
		</>
	);
}



// Наполнение сайта - Блок МЕНЮ
const TextBlockContent0 = [
	{
		head: 'Начало',
		link: 'section-0', 
		id: 40,
	},
	{
		head: 'Зачем',
		link: 'section-1', 
		id: 41,
	},
	{
		head: 'Затраты',
		link: 'section-2', 
		id: 42,
	},
	{
		head: 'Выгода',
		link: 'section-3', 
		id: 43,
	},
	{
		head: 'Процесс',
		link: 'section-4', 
		id: 44,
	},
	{
		head: 'Вопросы',
		link: 'section-5', 
		id: 45,
	},
	{
		head: 'Связаться',
		link: 'section-6', 
		id: 46,
	},
];
// Наполнение сайта - Блок 1 
const TextBlockContent1= [
	{
		head: 'Дефекты есть почти во всех квартирах', 
		content:'9 из 10 квартир сдаются застройщиками со строительными дефектами. Отклонения от норм СНИПов и ГОСТов, сколы, царапины, трещины, кривые стены, плитка, вздутый ламинат, продувания оконных рам, проблемы с вентиляцией и др.',
		img: '../../img/icons/diagram.svg',
		imgAlt: 'diagram',
		id: 1,
	},
	{
		head: 'Застройщик не инициирует решение проблем за Вас',
		content: 'Застройщики практически никогда не устраняют недостатки, исключение составляют те дефекты, которые препятствуют проживанию в квартире. Соответственно покупателям приходится проводить дополнительные строительные работы и ремонт самостоятельно за свой счет.',
		img: '../../img/icons/gesturing.svg',
		imgAlt: 'gesturing',
		id: 2,
	},
	{
		head: 'Это сделаем мы',
		content: 'Мы оказываем полный спектр услуг, от проверки качества (приёмки) новой квартиры, до взыскания компенсации штрафных санкций с застройщика за ненадлежащее качество переданной квартиры.',
		img: '../../img/icons/timemoney.svg',
		imgAlt: 'timemoney',
		id: 3,
	},
];
// Наполнение сайта - Блок ПАКЕТЫ УСЛУГ
const TextBlockContent2= [
	{
		head: 'Оценка квартиры', 
		content:'Специалисты осмотрят Вашу квартиру, составят список дефектов. В результате Вы получите смету на ремонтные работы.',
		priceMain: '30 000 р',
		priceSecond: '',
		id: 11,
	},
	{
		head: 'Оценка квартиры, судебное сопровождение', 
		content:'Специалисты осмотрят Вашу квартиру, составят список дефектов. На основе сметы, мы подготовим документы для суда и будем сопровождать Вас в суде. В результате Вы получите денежную компенсацию от застройщика или устранение дефектов квартиры.',
		priceMain: '30 000 р',
		priceSecond: '+10% от иска',
		id: 12,
	},
	// {
	// 	head: 'Оценка квартиры', 
	// 	content:'Специалисты осмотрят Вашу квартиру, составят список дефектов. В результате Вы получите смету на ремонтные работы.',
	// 	priceMain: '80 000 р',
	// 	priceSecond: '',
	// 	id: 13,
	// },
	// {
	// 	head: 'Оценка квартиры', 
	// 	content:'Специалисты осмотрят Вашу квартиру, составят список дефектов. В результате Вы получите смету на ремонтные работы.',
	// 	priceMain: '110 000 р',
	// 	priceSecond: '',
	// 	id: 14,
	// },
];

// Наполнение сайта - Блок ПРОЦЕСС СОТРУДНИЧЕСТВА 
const TextBlockContent3= [
	{
		head: 'Подписание договора', 
		content:'Подписываем с вами договор об оказании услуг (осмотр квартиры и/или исковое заявление)',
		id: 21,
	},
	{
		head: 'Осмотр квартиры',
		content: 'Проведение осмотра и подготовка заключения о стоимости устранения дефектов, допущенных застройщиком.',
		id: 22,
	},
	{
		head: 'Подготовка документов',
		content: 'Подготовка и подача искового заявления о взыскании компенсации за строительные недостатки, пени, штрафа, компенсации морального вреда, и убытков.',
		id: 23,
	},
	{
		head: 'Сопровождение в суде',
		content: 'Подготовка и подача искового заявления о взыскании компенсации за строительные недостатки, пени, штрафа, компенсации морального вреда, и убытков.',
		id: 24,
	},
];

// Наполнение сайта - Блок ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ
const TextBlockContent4= [
	{
		head: 'Почему так?', 
		content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sunt odit dolorum magni itaque deserunt blanditiis suscipit quas nam, perferendis, saepe quos corrupti, praesentium deleniti? Exercitationem delectus atque similique fugit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sunt odit dolorum magni itaque deserunt blanditiis suscipit quas nam, perferendis, saepe quos corrupti, praesentium deleniti? Exercitationem delectus atque similique fugit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sunt odit dolorum magni itaque deserunt blanditiis suscipit quas nam, perferendis, saepe quos corrupti, praesentium deleniti? Exercitationem delectus atque similique fugit!',
		id: 51,
	},
	{
		head: 'И все же, почему?', 
		content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sunt odit dolorum magni itaque deserunt blanditiis suscipit quas nam, perferendis, saepe quos corrupti, praesentium deleniti? Exercitationem delectus atque similique fugit!',
		id: 52,
	},
	{
		head: 'Вот почему', 
		content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sunt odit dolorum magni itaque deserunt blanditiis suscipit quas nam, perferendis, saepe quos corrupti, praesentium deleniti? Exercitationem delectus atque similique fugit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sunt odit dolorum magni itaque deserunt blanditiis suscipit quas nam, perferendis, saepe quos corrupti, praesentium deleniti? Exercitationem delectus atque similique fugit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sunt odit dolorum magni itaque deserunt blanditiis suscipit quas nam, perferendis, saepe quos corrupti, praesentium deleniti? Exercitationem delectus atque similique fugit!',
		id: 53,
	},
];

// Наполнение сайта - Блок СВЯЗАТЬСЯ С НАМИ
const Socials= [
	{
		link: 'https://www.instagram.com/direct/t/340282366841710300949128189009682422351',
		img: '../../img/social/instagram.svg',
		imgAlt: 'instagram',
		id: 31,
	},
	{
		link: 'https://vk.com/id76299038',
		img: '../../img/social/vk.svg',
		imgAlt: 'vk',
		id: 32,
	},
	{
		link: 'https://t.me/Tarasov444',
		img: '../../img/social/telegram.svg',
		imgAlt: 'telegram',
		id: 33,
	},
	{
		link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
		img: '../../img/social/email.svg',
		imgAlt: 'email',
		id: 34,
	},
];



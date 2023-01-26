import React,{useState} from 'react';

import Header from './components/01_Header.js';
import Cover from './components/02_Cover.js';
import Why from './components/03_Why.js';
import Defects from './components/04_Defects.js';
import Cost from './components/05_Cost.js';
import Calculator from './components/06_Calculator.js';
import Process from './components/07_Process.js';
import QA from './components/08_QA.js';
import Contacts from './components/09_Contacts.js';
import Footer from './components/10_Footer.js';
import CallBtn from './components/11_CallBtn.js';
import Call from './components/20_Call.js';



// Верстка сайта
export default function App(){
	const [isCallOpen, setCallOpen] = useState(false);
	const [packageName, setPackage] = useState('');

	return (
		<>
			<Header Content={ContentMenu} openCall={() => setCallOpen(true)} setPackageName={()=>setPackage('')}/>
			<Cover openCall={() => setCallOpen(true)} setPackageName={()=>setPackage('')} ID='section-0'/>
			<Why Content={ContentWhy} Title='' ID='section-1'/>
			<Defects Content={ContentDefects} Title='РАСПРОСТРАНЕННЫЕ ДЕФЕКТЫ' ID='section-2'/>
			<Calculator Title='ИСКОВОЙ КАЛЬКУЛЯТОР' ID='section-3'/>
			<Cost Content={ContentCost} Title='ПАКЕТЫ УСЛУГ' ID='section-4' openCall={() => setCallOpen(true)} setPackageName={(value)=>setPackage(value)} />
			<Process Content={ContentProsecc} Title='ПРОЦЕСС СОТРУДНИЧЕСТВА' ID='section-5'/>
			<QA Content={ContentQA} Title='ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ' ID='section-6'/>
			<Contacts Content={ContentSocials} Title='СВЯЖИТЕСЬ С НАМИ' openCall={() => setCallOpen(true)} setPackageName={()=>setPackage('')} ID='section-7'/>
			<Footer/>
			<CallBtn openCall={() => setCallOpen(true)} setPackageName={()=>setPackage('')}/>
			{isCallOpen?  <Call onClose={() => setCallOpen(false)} packageName={packageName}/> : null}					
		</>
	);
}



// Наполнение сайта - Блок МЕНЮ
const ContentMenu = [
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
		head: 'Дефекты',
		link: 'section-2', 
		id: 42,
	},
	{
		head: 'Калькулятор',
		link: 'section-3', 
		id: 43,
	},
	{
		head: 'Пакеты услуг',
		link: 'section-4', 
		id: 44,
	},
	{
		head: 'Процесс',
		link: 'section-5', 
		id: 45,
	},
	{
		head: 'Вопросы',
		link: 'section-6', 
		id: 46,
	},
	{
		head: 'Связаться',
		link: 'section-7', 
		id: 47,
	},
];
// Наполнение сайта - Блок 1 
const ContentWhy= [
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

// Наполнение сайта - Блок ДЕФЕКТЫ 
const ContentDefects= [
	{
		head: 'Входные двери', 
		content:'Неисправные замки, заедающая ручка, люфт входной двери, несоответствие проема дверной коробе',
		img: '../../img/defects/1.jpg',
		imgAlt: '',
		pointTop: 20,
		pointRight: 20,
		id: 1,
	},
	{
		head: 'Окна', 
		content:'Неисправные замки, заедающая ручка, люфт входной двери, несоответствие проема дверной коробе',
		img: '../../img/defects/2.jpg',
		imgAlt: '',
		pointTop: 50,
		pointRight: 50,
		id: 2,
	},
];
// Наполнение сайта - Блок ПАКЕТЫ УСЛУГ
const ContentCost= [
	{
		head: 'Пакет услуг - 1. Лучший выбор', 
		content:'Специалисты осмотрят Вашу квартиру, составят список дефектов. В результате Вы получите смету на ремонтные работы.',
		priceMain: '30 000 р',
		priceSecond: '',
		best: true,
		id: 11,
	},
	{
		head: 'Пакет услуг - 2', 
		content:'Специалисты осмотрят Вашу квартиру, составят список дефектов. На основе сметы, мы подготовим документы для суда и будем сопровождать Вас в суде. В результате Вы получите денежную компенсацию от застройщика или устранение дефектов квартиры.',
		priceMain: '30 000 р',
		priceSecond: '+10% от иска',
		best: false,
		id: 12,
	},
	{
		head: 'Пакет услуг - 3', 
		content:'Специалисты осмотрят Вашу квартиру, составят список дефектов. В результате Вы получите смету на ремонтные работы.',
		priceMain: '80 000 р',
		priceSecond: '',
		best: false,
		id: 13,
	},
	{
		head: 'Пакет услуг - 4', 
		content:'Специалисты осмотрят Вашу квартиру, составят список дефектов. В результате Вы получите смету на ремонтные работы.',
		priceMain: '110 000 р',
		priceSecond: '',
		best: false,
		id: 14,
	},
];

// Наполнение сайта - Блок ПРОЦЕСС СОТРУДНИЧЕСТВА 
const ContentProsecc= [
	{
		head: '1', 
		content:'Подписываем с вами договор об оказании услуг (осмотр квартиры и/или исковое заявление)',
		id: 21,
	},
	{
		head: '2',
		content: 'Проведение осмотра и подготовка заключения о стоимости устранения дефектов, допущенных застройщиком.',
		id: 22,
	},
	{
		head: '3',
		content: 'Подготовка и подача искового заявления о взыскании компенсации за строительные недостатки, пени, штрафа, компенсации морального вреда, и убытков.',
		id: 23,
	},
	{
		head: '4',
		content: 'Подготовка и подача искового заявления о взыскании компенсации за строительные недостатки, пени, штрафа, компенсации морального вреда, и убытков.',
		id: 24,
	},
];

// Наполнение сайта - Блок ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ
const ContentQA= [
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
const ContentSocials= [
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



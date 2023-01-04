import React from 'react';

import Header from './components/Header.js';
import TextBlockHor from './components/TextBlockHor.js';
import Calculator from './components/Calculator.js';
import TextBlockHorBtn from './components/TextBlockHorBtn.js';
import TextBlockVert from './components/TextBlockVert.js';
import QA from './components/QA.js';
import Contacts from './components/Contacts.js';
import Footer from './components/Footer.js';



// Верстка сайта
export default function App(){
	return (
		<>
			<Header TextBlocks={TextBlockContent0}/>
			<div id='main' className='wrapper'>
				<TextBlockHor TextBlocks={TextBlockContent1} Title='ЗАЧЕМ' ID='section-1'/>
				<TextBlockHorBtn TextBlocks={TextBlockContent2} Title='СКОЛЬКО Я ПОТРАЧУ' ID='section-2'/>
				<Calculator Title='СКОЛЬКО Я ПОЛУЧУ' ID='section-3'/>
				<TextBlockVert TextBlocks={TextBlockContent3} Title='ПРОЦЕСС СОТРУДНИЧЕСТВА' ID='section-4'/>
				<QA TextBlocks={TextBlockContent4} Title='ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ' ID='section-5'/>
				<Contacts Socials={Socials} Title='СВЯЗАТЬСЯ С НАМИ' ID='section-6'/>
			</div>
			<Footer/>						
		</>
	);
}



// Наполнение сайта - Блок МЕНЮ
const TextBlockContent0 = [
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
		priceMain: '30 000 ₽',
		priceSecond: '',
		id: 11,
	},
	{
		head: 'Оценка квартиры, судебное сопровождение', 
		content:'Специалисты осмотрят Вашу квартиру, составят список дефектов. На основе сметы, мы подготовим документы для суда и будем сопровождать Вас в суде. В результате Вы получите денежную компенсацию от застройщика или устранение дефектов квартиры.',
		priceMain: '30 000 ₽',
		priceSecond: '+10% от иска',
		id: 12,
	},
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



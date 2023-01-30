import React,{useState} from 'react';
import './04_Defects.scss';

export default function Defects({Content, Title, ID}) {
	
	const [activeDefect, setActiveDefect] = useState(0);
	// const [activePhoto, setActivePhoto] = useState(0);

	const htmlBlockInfo = Content.map(({head,content,img,imgAlt,id}) =>{
		return(
			<div key={id} className='f-column info'>
				<h3>{head}</h3>
				<p>{content}</p>
				<img src={img} alt={imgAlt}></img>
			</div>
		);
	});

	const htmlBlockPoints = Content.map(({pointTop,pointRight,id},i) =>{
		return(
			<div 
			key={id} 
			className={activeDefect==i?'point active':'point'} 
			onClick={()=>setActiveDefect(i)} 
			style={{top: `${pointTop}%`, right: `${pointRight}%`}}
			>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 447"><defs></defs><path className="a" d="M202,203H21c-12-1-21,8-21,20a20.51,20.51,0,0,0,21,21H203V426a21,21,0,0,0,42,0V243H427a20.51,20.51,0,0,0,21-21c0-12-11-20-22-20H244V21a21,21,0,0,0-42,0"/></svg>
			</div>
		);
	});
	
	
	return(
		<section id={ID} className='defects'>
			<h2>{Title}</h2>
			<h6>Без профессионального оборудования, знаний и опыта найти большинство дефектов, а также попытаться взыскать расходы на устранение дефектов  будет проблематично</h6>
			<div className='wrapper'>
				<div className='f-row container'>
					{htmlBlockInfo[activeDefect]}
					<div className='map'>
						<img src='../../img/apartment.png' alt='{imgAlt}'></img>
						{htmlBlockPoints}
					</div>
				</div>
			</div>
		</section>
	);
}



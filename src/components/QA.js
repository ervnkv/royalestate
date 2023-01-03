import React, {useState} from 'react';
import './QA.scss';


export default function QA({TextBlocks,Title,ID}) {
	
	const htmlTextBlock = TextBlocks.map(({head,content,id}) => {
		const [isActive, setActive] = useState(false);
		return(
			<div className='card' key={id}>
				<div 
				className={isActive ? 'cardHead active' : 'cardHead'} 
				onClick={() => setActive(!isActive)}>
					<h3>{head}</h3>
					<h3>▼</h3>
				</div>
				<div className={isActive ? 'cardContent active' : 'cardContent'} >
					<h4>{content}</h4>
				</div>
			</div>
		);
	});

	return(
		<section id={ID} className='f-column qa'>
			<h2>{Title}</h2>
			<div className='f-column container'>
				{htmlTextBlock}
			</div>	
		</section>
	);
}
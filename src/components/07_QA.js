import React, {useState} from 'react';
import './07_QA.scss';


export default function QA({TextBlocks,Title,ID}) {
	
	const htmlTextBlock = TextBlocks.map(({head,content,id}) => {
		const [isActive, setActive] = useState(false);
		return(
			<div className='card' key={id}>
				<div 
				className={isActive ? 'cardHead active' : 'cardHead'} 
				onClick={() => setActive(!isActive)}>
					<h5>{head}</h5>
					<h5 className={isActive ? 'active' : ''}>▼</h5>
				</div>
				<div className={isActive ? 'cardContent active' : 'cardContent'}>
					<p>{content}</p>
				</div>
			</div>
		);
	});

	return(
		<section id={ID} className='f-column qa'>
			<h2>{Title}</h2>
			<div className='wrapper'>
				<div className='f-column container'>
					{htmlTextBlock}
				</div>
			</div>
		</section>
	);
}
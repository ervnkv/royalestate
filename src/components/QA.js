import React, {Component} from 'react';
import './QA.scss';


export default class QA extends Component {
	constructor(props){
		super(props);	
	}
	
	render() {
		const {TextBlocks,Title} = this.props;

		const htmlTextBlock = TextBlocks.map(({head,content,id}) =>{
			return(
				<div className='card' key={id}>
					<div className='cardHead'>
						<h3>{head}</h3>
						<h3>▼</h3>
					</div>
					<div className='cardContent'>
						<h4>{content}</h4>
					</div>
				</div>
			);
		});
		
		return(
			<section className='f-column qa'>
				<h2>{Title}</h2>
				<div className='f-column container'>
					{htmlTextBlock}
					{/* <div className='card' key='id'>
						<div className='cardHead'>
							<h3>head</h3>
							<h3>▼</h3>
						</div>
						<div className='cardContent'>
							<h4>content</h4>
						</div>
					</div> */}
				</div>	
			</section>
		);
	}
}
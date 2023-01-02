import React, {Component} from 'react';
import './Calculator.scss';


export default class Calculator extends Component {
	constructor(props){
		super(props);
		this.state = {
			activeArea: 'a1',
			activeCount: 'c1'
		};
		this.setActive = this.setActive.bind(this);
	}
	setActive(id) {
		// this.setState(() => ({
		// 	activeArea: id
		// }));
		console.log(id);
	}

	render() {
		const {Title} = this.props;

		const htmlAreaButtons = areaButtons.map(({tittle,id}) =>{
			const classN = (this.state.activeArea == id ? 'btnRoomArea active' : 'btnRoomArea');
			return(
				<button 
					key={id} 
					onClick={this.setActive({id})}
					className={classN}>
					{tittle}
				</button>
			);
		});

		const htmlCountButtons = countButtons.map(({tittle,id}) =>{
			const classN = (this.state.activeCount == id ? 'btnRoomArea active' : 'btnRoomArea');
			return(
				<button key={id} className={classN}>
					{tittle}
				</button>
			);
		});
		

		return(
			<section className='f-column calculator'>
				<h2>{Title}</h2>
				<div className='f-row container'>
					<img src='../../img/icons/floorplan.png' alt='floorplan'></img>
					<div className='f-column calc'>
						<div className='f-row'>
							<h3 className='calcText'>Площадь квартиры</h3>
							<div className='calcBlock'>
								{htmlAreaButtons}	
							</div>
						</div>
						<div className='f-row'>
							<h3 className='calcText'>Количество дефектов</h3>
							<div className='calcBlock'>
								{htmlCountButtons}	
							</div>
						</div>
						<div className='f-row'>
							<h3 className='calcText'>Примерная сумма иска:</h3>
							<h2>100 000 p</h2>
						</div>
					</div>
				</div>	
			</section>
		);
	}
}

const areaButtons = [
	{
		tittle: '0-19',
		id: 'a1',
	},
	{
		tittle: '20-40',
		id: 'a2',
	},
	{
		tittle: '40+',
		id: 'a3',
	},
];
const countButtons = [
	{
		tittle: '1',
		id: 'c1',
	},
	{
		tittle: '2',
		id: 'c2',
	},
	{
		tittle: '3',
		id: 'c3',
	},
	{
		tittle: '4',
		id: 'c4',
	},
	{
		tittle: '5',
		id: 'c5',
	},
];

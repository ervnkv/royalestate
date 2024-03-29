import React, {Component} from 'react';
import './06_Calculator.scss';


export default class Calculator extends Component {
	constructor(props){
		super(props);
		this.state = {
			activeArea: 'a2',
			activeCount: 'c3',
		};
		this.setActiveArea = (id) => {
			this.setState(() => ({
				activeArea: id
			}));
		};
		this.setActiveCount = (id) => {
			this.setState(() => ({
				activeCount: id
			}));
		};	
	}
	
	render() {
		const {Title,ID} = this.props;

		const htmlAreaButtons = areaButtons.map(({tittle,id}) =>{
			const classN = (this.state.activeArea == id ? 'btnRoomArea active' : 'btnRoomArea');
			return(
				<button 
					key={id} 
					onClick={() => this.setActiveArea(id)}
					className={classN}>
					{tittle}
				</button>
			);
		});

		const htmlCountButtons = countButtons.map(({tittle,id}) =>{
			const classN = (this.state.activeCount == id ? 'btnRoomArea active' : 'btnRoomArea');
			return(
				<button 
					key={id} 
					onClick={() => this.setActiveCount(id)}
					className={classN}>
					{tittle}
				</button>
			);
		});

		const getSum = () => {
			const comb = this.state.activeArea+this.state.activeCount;
			let result = '';
			switch (comb) {
				case 'a1c1':
					result = '100 001';
					break;
				case 'a1c2':
					result = '100 002';
					break;
				case 'a1c3':
					result = '100 003';
					break;
				case 'a1c4':
					result = '100 004';
					break;
				case 'a1c5':
					result = '100 005';
					break;
				case 'a2c1':
					result = '200 001';
					break;
				case 'a2c2':
					result = '200 002';
					break;
				case 'a2c3':
					result = '200 003';
					break;
				case 'a2c4':
					result = '200 004';
					break;
				case 'a2c5':
					result = '200 005';
					break;
				case 'a3c1':
					result = '300 001';
					break;
				case 'a3c2':
					result = '300 002';
					break;
				case 'a3c3':
					result = '300 003';
					break;
				case 'a3c4':
					result = '300 004';
					break;
				case 'a3c5':
					result = '300 005';
					break;
				default:
					result = '100 000';
					break;
			}
			return(
				<h3>{result} pуб.</h3>
			);
		};
		

		return(
			<section id={ID} className='f-column calculator'>
				<h2>{Title}</h2>
				<div className='wrapper'>
					<div className='f-row container'>
						<div className='f-column calc'>
							<div className='f-row calc-top'>
								<div className='f-row calc-result'>
									<h5>Примерная сумма иска</h5>
									{getSum()}
								</div>
							</div>
							<div className='f-column calc-main'>
								<div className='f-row calc-btns'>
									<h5>Площадь квартиры</h5>
									{htmlAreaButtons}
								</div>
								<div className='f-column calc-btns'>
									<h5>Обнаруженные дефекты</h5>
									{htmlCountButtons}
								</div>
							</div>

						</div>
					</div>
				</div>	
			</section>
		);
	}
}

const areaButtons = [
	{
		tittle: '25-40',
		id: 'a1',
	},
	{
		tittle: '40-80',
		id: 'a2',
	},
	{
		tittle: '80+',
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

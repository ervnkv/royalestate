import React, {Component} from 'react';
import './Calculator.scss';


export default class Calculator extends Component {
	constructor(props){
		super(props);
		this.state = {
			activeArea: 'a2',
			activeCount: 'c3',
			sum: '___',
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
		const {Title} = this.props;

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
					result = '100001';
					break;
				case 'a1c2':
					result = '100002';
					break;
				case 'a1c3':
					result = '100003';
					break;
				case 'a1c4':
					result = '100004';
					break;
				case 'a1c5':
					result = '100005';
					break;
				case 'a2c1':
					result = '200001';
					break;
				case 'a2c2':
					result = '200002';
					break;
				case 'a2c3':
					result = '200003';
					break;
				case 'a2c4':
					result = '200004';
					break;
				case 'a2c5':
					result = '200005';
					break;
				case 'a3c1':
					result = '300001';
					break;
				case 'a3c2':
					result = '300002';
					break;
				case 'a3c3':
					result = '300003';
					break;
				case 'a3c4':
					result = '300004';
					break;
				case 'a3c5':
					result = '300005';
					break;
				default:
					result = '100000';
					break;
			}
			return(
				<h2>{result} p</h2>
			);
		};
		

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
							{getSum()}
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

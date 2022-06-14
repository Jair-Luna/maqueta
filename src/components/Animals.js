import { Component } from 'react';
import Animal from './Animal';

class Animals extends Component {
	render() {
		const { animals } = this.props;

		return (
			<div className="animals">
				{animals.map((animal) => (
					<Animal key={animal.name} animal={animal} />
				))}
			</div>
		);
	}
}

export default Animals;

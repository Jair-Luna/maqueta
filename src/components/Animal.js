import { Component } from 'react';

class Animal extends Component {
	render() {
		const { animal } = this.props;

		return (
			<div>
				<img alt={animal.name} src={animal.img} />
				<p>{animal.name}</p>
			</div>
		);
	}
}

export default Animal;

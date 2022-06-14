import { Component } from 'react';
import './App.css';
import Animals from './components/Animals';
import Layout from './components/Layout';

class App extends Component {
	state = {
		animals: [
			{ name: 'Perro', img: 'images/perro.png' },
			{ name: 'Buho', img: 'images/buho.png' },
			{ name: 'Caballo', img: 'images/caballo.png' },
			{ name: 'Mono', img: 'images/mono.png' },
			{ name: 'Elefante', img: 'images/elefante.png' },
		],
	};

	render() {
		return (
			<div className="container">
				<div></div>
				<div>
					<Layout>
						<Animals animals={this.state.animals} />
					</Layout>
				</div>
			</div>
		);
	}
}

export default App;

import { Component } from 'react';
import './App.css';
import Animals from './components/Animals';
import './components/style.css';

class App extends Component {
  state = {
    animals: [
      { name: 'Perro', img: 'images/perro.png', sound: 'sounds/PERRO.wav' },
      { name: 'Buho', img: 'images/buho.png', sound: 'sounds/BUHO.mp3' },
      {
        name: 'Caballo',
        img: 'images/caballo.png',
        sound: 'sounds/CABALLO.wav',
      },
      { name: 'Mono', img: 'images/mono.png', sound: 'sounds/MONO.mp3' },
      {
        name: 'Elefante',
        img: 'images/elefante.png',
        sound: 'sounds/ELEPHANT.mp3',
      },
      { name: 'Gato', img: 'images/gato.png', sound: 'sounds/GATO.wav' },
    ],
  };

  render() {
    return (
      <div className="container">
        <div>
          <h2>¿Cómo hacen los animales?</h2>
        </div>
        <div className="animals-card">
          <Animals animals={this.state.animals} />
        </div>
      </div>
    );
  }
}

export default App;

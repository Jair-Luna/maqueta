import { Component } from 'react';

class Animal extends Component {
  render() {
    const { animal } = this.props;
    return (
      <div>
        <img className="animal-img" alt={animal.name} src={animal.img} />
        <p>{animal.name}</p>
        <button
          onClick={() => {
            new Audio(animal.sound).play();
          }}
        >
          <img
            className="megaphone"
            alt="megaphone"
            src="images/megafono-pq.png"
          />
        </button>
      </div>
    );
  }
}

export default Animal;

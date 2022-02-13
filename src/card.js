import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Card extends Component {
  render() {
    return (
      <div className="Card">
          <img className="img" src={require('./lata-mangeshkar.jpg')}/>
        <h6>Lata mangeshakar 1929-2022</h6>
      </div>
    );
  }
}

export default Card;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './card.js'
import Heading  from './heading';
import Footer from './footer.js'

class App extends Component {
  render() {
    return (

      <div className="App">
        <Heading/>

        <Card/>
        <Footer/>
        
      </div>
    );
  }
}

export default App;

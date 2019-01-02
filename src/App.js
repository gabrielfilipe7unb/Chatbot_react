import React, { Component } from 'react';
import './App.css';
import Header from './Componentes/Header';
import Footer from './Componentes/Footer';
import Home from './Componentes/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;

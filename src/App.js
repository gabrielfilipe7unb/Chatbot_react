import React, { Component } from 'react';
import './App.css';
import Header from './Componentes/Header';
import Footer from './Componentes/Footer';
import { Button } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Button color="danger">Danger!</Button>
        <Footer />
      </div>
    );
  }
}

export default App;

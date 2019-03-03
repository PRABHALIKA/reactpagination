import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Menu from './Menu/Menu';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Menu />
        <Footer />
      </div>
    );
  }
}

export default App;

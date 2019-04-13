import React, { Component } from 'react';
import Header from "./components/Header/Header"
import Items from "./components/Items/Items"
import Footer from "./components/Footer/Footer"

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Items />
        <Footer />
      </div>
    );
  }
}

export default App;

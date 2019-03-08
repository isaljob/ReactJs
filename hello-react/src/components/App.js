import React, { Component } from 'react';
import Header from './Header'
import List from './List'
import Footer from './Footer'
import Images from './Images'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello React JS</h1>
        <p>Ini dibuat dengan React JS</p>
        <p>==============================================</p>
        <Header/>
        <Images/>
        <List/>
        <Footer/>
      </div>
    );
  }
}

export default App;

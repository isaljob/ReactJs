import React, { Component } from 'react';
import Header from './Header'
//import List from './List'
import Footer from './Footer'
// import Images from './Images'
import Top from './Top'
//import Main from './Main'
import Form from './Form'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello React JS</h1>
        <p>Ini dibuat dengan React JS</p>
        <p>==============================================</p>
        <Header list="3 Terbaik"/>
        <Top/>
        <Form/>
        {
          //<Main />
          //<List/>
        }
        <Footer name="Makanan Nusantara" tahun="2019"/>
      </div>
    );
  }
}

export default App;

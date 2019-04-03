import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Register from './Register/Register';
import TableComp from './TableComp/TableComp'
class App extends Component {
  constructor(){
    super();
    this.state={
      'headers':['NAME','EMAIL','PHONE','AGE'],
      'keys':['name','email','phone','age'],
      'data':[
        {
          'name':'n1',
          'email':'e1',
          'phone':'999',
          'age':20
        },{
          'name':'n1',
          'email':'e1',
          'phone':'999',
          'age':20
        },{
          'name':'n1',
          'email':'e1',
          'phone':'999',
          'age':20
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
          <Header />
          <Register />
          <TableComp headers={this.state.headers} data={this.state.data} keys={this.state.keys} />
          <Footer />
      </div>
    );
  }
}

export default App;

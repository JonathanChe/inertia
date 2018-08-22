import React, { Component } from "react";
import Main from './Main.js';
import Column from './Column.js';
import Weather from './Weather.js';
import axios from 'axios';
import './../css/Column.css';
import './../css/Main.css';
import './../css/Weather.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    
  }
  
  render(){
    return (
      <div className="App">
        <Column />
        <Main />
        <Weather />
      </div>
    );
  }
}

export default App;
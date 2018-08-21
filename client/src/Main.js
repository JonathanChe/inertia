import React, { Component } from 'react';
import Time from './Time.js';
import Display from './Display.js';
import Quote from './Quote.js';
import './../css/Time.css';
import './../css/Display.css';
import './../css/Quote.css';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>IM INSIDE MAIN</h1>
        <Time />
        <Display />
        <Quote />
      </div>
    )
  
  }

}

export default Main;
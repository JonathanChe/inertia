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
  // qotdAuthor={this.props.qotd.author} qotd={this.props.qotd.body}
  render() {
    return (
      <div className="main">
        <Time />
        <Display />
        <Quote qotd={this.props.qotd} qotdAuthor={this.props.qotdAuthor}/>
      </div>
    )
  
  }

}

export default Main;
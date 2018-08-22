import React, { Component } from "react";
import Main from './Main.js';
import Column from './Column.js';
import Weather from './Weather.js';
import axios from 'axios';
import './../css/Column.css';
import './../css/Main.css';
import './../css/Weather.css';
import './../css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      qotd: {},
    }

  }

  componentDidMount() {
    // NASA API Call for background photo
    fetch('https://api.nasa.gov/planetary/apod?api_key=cb2mo1m4qqiOibSDFxs3ulpvziCe9qy1aQiMLtNw')
      .then(res => res.json())
      .then(response => this.setState({ url: response.url }))
      .catch(err => console.log('ERROR ', err))

    // QOTD API Call
    fetch('https://favqs.com/api/qotd')
      .then(res => res.json())
      .then(response => this.setState({ qotd: response.quote }))
      .catch(err => console.log('Error ', err));
  }
  
  render(){
    return (
      <div className="App" style={{backgroundImage: `url(${this.state.url})`}} >
        <Column />
        <Main qotdAuthor={this.state.qotd.author} qotd={this.state.qotd.body} />
        <Weather />
      </div>
    );
  }
}

export default App;
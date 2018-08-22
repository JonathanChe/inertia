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
      weather: '',
      todoList: null,
    }
    this.clickEvent = this.clickEvent.bind(this);
  }

  clickEvent() {

  }

  componentDidMount() {
    // NASA API Call for background photo
    fetch('https://api.nasa.gov/planetary/apod?api_key=cb2mo1m4qqiOibSDFxs3ulpvziCe9qy1aQiMLtNw')
      .then(res => res.json())
      .then(response => this.setState({ url: response.url }))
      .catch(err => console.log('ERROR ', err))
      
    // Weather API call
    fetch('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/a3e04a7bf3b7e7e44fede6fc91b36c44/34.0522,-118.2437')
      .then(res => res.json())
      .then(response => this.setState({ weather: response.currently.apparentTemperature.toFixed(0) }))
      .catch(err => console.log('Error ', err));

    // QOTD API Call
    fetch('https://favqs.com/api/qotd')
      .then(res => res.json())
      .then(response => this.setState({ qotd: response.quote }))
      .catch(err => console.log('Error ', err));

      // axios call for data
      axios.get('/').then(response => {
        // at the beginning of our program, our database has nothing. As we add our todos, databases get populated. 
        const todos = {
          Mon: [],
          Tues: [],
          Wed: [],
          Thurs: [],
          Friday: [],
          Sat: [],
          Sun: [],
        };
        console.log('inside get request of axios')
        // if we see a the date we're going to using axios, to look through the database
      // response.data refers to the array, inside array are objects. 
      });
  }
  
  render(){
    return (
      <div className="App" style={{backgroundImage: `url(${this.state.url})`}} >
        <Column clickEvent={this.clickEvent} />
        <Main qotdAuthor={this.state.qotd.author} qotd={this.state.qotd.body} />
        <Weather weather={this.state.weather} />
      </div>
    );
  }
}

export default App;
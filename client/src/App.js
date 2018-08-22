import React, { Component } from "react";
import Main from './Main.js';
import Column from './Column.js';
import Weather from './Weather.js';
import axios from 'axios';
import './../css/Column.css';
import './../css/Main.css';
import './../css/Weather.css';
import './../css/App.css';
import { SSL_OP_CRYPTOPRO_TLSEXT_BUG } from "constants";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      qotd: {},
      weather: '',
      // todos: [ ['Mon', []],
      //   ['Tues', [] ],
      //   ['Wed', [] ],
      //   ['Thurs', [] ],
      //   ['Friday', [] ],
      //   ['Sat', [] ],
      //   ['Sun', [] ],
      // ],
      todos: {
        Mon: [],
        Tues: [],
        Wed: [],
        Thurs: [],
        Fri: [],
        Sat: [],
        Sun: [],
      },
      display: false,
      dateToDisplay: null,
    }
    this.clickEvent = this.clickEvent.bind(this);
    this.displayTodos = this.displayTodos.bind(this);
  }

  clickEvent(e) {
    // edge-case: check to see if the todoLIst is null - if so, gotta do something 
    const daysOfTheWeek = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
    // figure out which day is being passed in 
    // this can be refactored, tired and unable to think of better solutions. 
    switch(daysOfTheWeek[e]) {
      case 'Mon':
      case 'Tues':
      case 'Wed':
      case 'Thurs':
      case 'Fri':
      case 'Sat':
      case 'Sun':
      // show nothing if nothing selected. 
      default: null;
    // pass the ith element as an argument to display the todos list. 
    }
    this.displayTodos(daysOfTheWeek[e.target.id]);
  }

  displayTodos(day) {
    let bool = !this.state.display
    // flip boolean everytime button is clicked. 
    this.setState({ display: bool, dateToDisplay : day });
    console.log('past state, ', bool)
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
        // console.log('AM I HERE???')
        // at the beginning of our program, our database has nothing. As we add our todos, databases get populated. 
        // const todos = {
        //   Mon: [],
        //   Tues: [],
        //   Wed: [],
        //   Thurs: [],
        //   Friday: [],
        //   Sat: [],
        //   Sun: [],
        // };
        
        // temp for now for testing, need to build up further with database. 
        // this.setState({ todos })
        // console.log(this.state)

        console.log('inside get request of axios')
        // if we see a the date we're going to using axios, to look through the database
      // response.data refers to the array, inside array are objects. 
      });
  }
  
  render(){
    return (
      <div className="App" style={{backgroundImage: `url(${this.state.url})`}} >
        <Column clickEvent={this.clickEvent} />
        <Main 
          displayTodos={this.displayTodos} 
          qotdAuthor={this.state.qotd.author} 
          qotd={this.state.qotd.body} 
          display={this.state.display}
          dateToDisplay={this.state.dateToDisplay}
          todos={this.state.todos}
          />
        <Weather weather={this.state.weather} />
      </div>
    );
  }
}

export default App;
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
      todos: [],
      display: false,
      dateToDisplay: null,
      todoInput: "Add your todo here!",
    }
    this.clickEvent = this.clickEvent.bind(this);
    this.displayTodos = this.displayTodos.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({todoInput: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    const { todoInput, dateToDisplay } = this.state;
  
    axios.post('/yourdata', { todoInput, dateToDisplay }).then(response => {
      this.setState({ todos: response.data.todoList });
    })
    this.setState({todoInput: ''});
  }

  clickEvent(e) {
    const daysOfTheWeek = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
    const clickedDay = daysOfTheWeek[e.target.id]
    // do get request here so you can populate the list
    axios.get('/yourdata').then(response => {
      for (let i = 0; i < response.data.length; i++) {
        if (clickedDay === response.data[i].dateToDisplay) {
          this.setState({ todos: response.data[i].todoList})
        }
      }
    })
    this.displayTodos(clickedDay);
  }

  displayTodos(day) {
    // flip boolean everytime button is clicked. 
    let bool = !this.state.display
    if (this.state.display === false) {
      // reinitialize values. 
      this.setState({ todos: [], todoInput: "Add your todo here!" });
    } 
    this.setState({ display: bool, dateToDisplay : day });
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
      axios.get('/yourdata').then(response => {
        // console.log('inside of axios get call of CDM')
        // console.log(response.data)
        // const { todoList } = response.data;
        // console.log(todoList);
        // this.setState({ todoList });
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

        // console.log('inside get request of axios')
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
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          todoInput={this.state.todoInput}
          />
        <Weather weather={this.state.weather} />
      </div>
    );
  }
}

export default App;
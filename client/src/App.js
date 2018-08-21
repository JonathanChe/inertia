import React, { Component} from "react";
import Main from './Main.js';
import Column from './Column.js';
import './../css/Column.css';
import './../css/Main.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div className="App">
        <Column />
        <Main />
        <h1> Hello, World! </h1>
      </div>
    );
  }
}

export default App;
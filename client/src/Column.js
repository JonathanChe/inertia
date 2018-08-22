import React, { Component } from 'react'
import Boxes from './Boxes.js';
import './../css/Boxes.css';

class Column extends Component {
  
  render() {
    const daysOfTheWeek = ['M', 'T', 'W', 'Th', 'F', 'S', 'Sun'];
    // map over the above and get a new array to explode on the page. 
    const days = daysOfTheWeek.map((day, i) => (
      <Boxes className="boxes" key={i} day={day} />
    ));

    return (
      <div className="column">
        {days}
      </div>
    )
  }
}

export default Column; 
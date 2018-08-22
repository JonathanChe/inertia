import React, { Component } from 'react'
import Boxes from './Boxes.js';
import './../css/Boxes.css';

class Column extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const daysOfTheWeek = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
    // map over the above and get a new array to explode on the page. 
    const days = daysOfTheWeek.map((day, i) => (
      <Boxes clickEvent={this.props.clickEvent} className="boxes" key={i} day={day} />
    ));

    return (
      <div className="column">
        {days}
      </div>
    )
  }
}

export default Column; 
import React, { Component } from 'react'
import Boxes from './Boxes.js';

class Column extends Component {
  render() {
    return (
      <div className="column">
        <Boxes/>
        IM INSIDE COLUMN
      </div>
    )
  }
}

export default Column; 
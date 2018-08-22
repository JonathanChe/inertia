import React from 'react';
import './../css/Boxes.css';

const Boxes = props => {
  return (
    <div className="boxes">
      <button onClick={(e) => props.clickEvent(e)} id={props.id} >{props.day}</button>
    </div>
  )
}

export default Boxes;

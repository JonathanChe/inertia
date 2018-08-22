import React from 'react';
import PropTypes from 'prop-types';
import './../css/Boxes.css';

/**
|--------------------------------------------------
| this will be a pure function that will populate 7 boxes in the lefthand side. 
  boxes will be M-Sun
|--------------------------------------------------
*/
const Boxes = props => {
  console.log(props.clickEvent)
  // each box will be a div element containing the class 'boxes' - specify the css rules for these boxes. 
  return (
    <div className="boxes">
      <button onClick={() => props.clickEvent()}>{props.day}</button>
    </div>
  )
}

export default Boxes;

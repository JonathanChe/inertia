import React from 'react';
import PropTypes from 'prop-types';

/**
|--------------------------------------------------
| this will be a pure function that will populate 7 boxes in the lefthand side. 
  boxes will be M-Sun
|--------------------------------------------------
*/
const Boxes = props => {
  const daysOfTheWeek = ['M', 'T', 'W', 'Th', 'F', 'S', 'Sun'];
  // map over the above and get a new array to explode on the page. 
  // each box will be a div element containing the class 'boxes' - specify the css rules for these boxes. 
  return (
    <div>
      IM INSIDE BOXES
    </div>
  )
}

export default Boxes;

import React from 'react';
import PropTypes from 'prop-types';

/**
|--------------------------------------------------
| this will be a pure function that will display the todos selected. 
|--------------------------------------------------
*/
const Display = props => {
  // console.log(props.todos['Mon']);
  let table;
  if (props.display === true && props.dateToDisplay !== null) {
    table = <div className="todosDisplay"> {props.todos[props.dateToDisplay]} </div>
  } else {
    // possibly change here?
    table = null;
  }

  return (
    <div id="display-container">
      {table}
    </div>
  )

}

export default Display;
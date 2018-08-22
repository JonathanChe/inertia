import React from 'react';
import PropTypes from 'prop-types';

/**
|--------------------------------------------------
| this will be a pure function that will display the todos selected. 
|--------------------------------------------------
*/

// here i need to make an input list in the div, space it out and append it to the todolist
// need to create seperate little spans in the div for the individual todos. 

const listofTodos = array => {
  // console.log(array)
  const list = array.map((todo, i) => (
    <Spans deed={todo} keyid={i} />
  ))
  console.log(list)
  return list; 
}

// for the todo lists.

const Spans = props => {
  // no testing done here
  return (
    <div>
      <span>
        {props.keyid + 1} - {props.deed}
      </span>
    </div>
  )
}

const Display = props => {
  // console.log(props.todos['Mon']);
  let table;
  if (props.display === true && props.dateToDisplay !== null) {
    table = <div className="todosDisplay"> {listofTodos(props.todos[props.dateToDisplay])} </div>
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
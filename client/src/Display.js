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
  return list; 
}

// for the todo lists.

const Spans = props => {
  // no testing done here
  return (
    <div>
      <ul>
        <li>
        {props.keyid + 1} - {props.deed}
        </li>
      </ul>
    </div>
  )
}

const InputTodoContainer = props => {
  console.log('inside inputtodocontainer ', props);
  return (
    <div>
      <form onSubmit={e => props.handleSubmit(e)}>
        <input id="inputs" type="text" value={props.todoInput} onChange={(e) => props.handleChange(e)}></input>
      </form>
    </div>
  )
}

const Display = props => {
  let table;
  if (props.display === true && props.dateToDisplay !== null) {
    table = <div className="todosDisplay"> {listofTodos(props.todos[props.dateToDisplay])} <InputTodoContainer handleSubmit={props.handleSubmit} handleChange={props.handleChange} todoInput={props.todoInput}/> </div>
  } else {
    // possibly change here?
    table = <div id="title">Set your Todos List!</div>;
  }

  return (
    <div id="display-container">
      {table}
    </div>
  )

}

export default Display;
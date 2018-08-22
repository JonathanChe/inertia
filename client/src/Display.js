import React from 'react';

const listofTodos = array => {
  // console.log(array)
  const list = array.map((todo, i) => (
    <Spans deed={todo} keyid={i} />
  ))
  return list; 
}

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
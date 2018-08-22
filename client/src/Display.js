import React from 'react';

const listofTodos = array => {
  const list = array.map((todo, i) => (
    <Spans deed={todo} keyid={i} />
  ))
  return list; 
}

const Spans = props => {
  return (
    <div>
      <ul>
        <li>
          {props.deed}
        </li>
      </ul>
    </div>
  )
}

const InputTodoContainer = props => {
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
  console.log('inside of display - props ', props.todos);
  if (props.display === true && props.dateToDisplay !== null) {
    table = <div className="todosDisplay"> {listofTodos(props.todos)} <InputTodoContainer handleSubmit={props.handleSubmit} handleChange={props.handleChange} todoInput={props.todoInput}/>  </div>
  } else {
    table = <div id="title">Set your Todos List!</div>;
  }

  return (
    <div id="display-container">
      {table}
    </div>
  )

}

export default Display;
import React from 'react';

function  TodoComponent(props) {
  console.log("this is the props****", props.todos)
  return (
    <div>
      <h1> Get 'er done y'all:</h1>
      <ul>
        {props.todos.map((todo, index) => {
          return <li key={index}>{props.todos[index]}
          <button onClick={() => props.removeTodo(index)}>Remove</button>
          </li>
        })}
      </ul>
    </div>
  )
}

export default TodoComponent;
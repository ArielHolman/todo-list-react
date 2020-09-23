import React from 'react';
import TodoItem from './Todoitem';

function  TodoComponent(props) {
  console.log("this is the props****", props.todos)
  return (
    <div>
      <h1> Get'er done y'all:</h1>
      <div></div>
        <ul>{props.todos.map((item, index) =>{
          return (
          <TodoItem item={item}/>
         )})}
        </ul>
    </div>
  )
}

export default TodoComponent;

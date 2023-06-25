import React from 'react';

export default function Todo(props) {
    
    console.log(props);
    return (
        <ul>
       { props.todoList.map( (todo) => <li>{todo}</li>)}
        </ul>
      );
        
}
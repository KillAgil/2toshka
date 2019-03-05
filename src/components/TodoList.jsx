import React from 'react';

import Todo from './Todo';

const TodoList = ({ todos, onToggleTodo ,onDeleteTodo}) => {
  return(
    <div className='todo-list__box'>
      {
        todos.map((todo, index) => 
          <Todo 
            key={ index }
            index = { index }
            todo={ todo }
            onToggleTodo={ onToggleTodo }
            onDeleteTodo={ onDeleteTodo }>
          </Todo>
        )
      }
    </div>
)};

export default TodoList;

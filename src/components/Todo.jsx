import React, { Component } from 'react';

import TodoInput from './TodoInput';

import './css/Todo.css';

class Todo extends Component {
  state = {
    edit: false
  };

  render(){
    let { onToggleTodo, onDeleteTodo, index, todo } = this.props;
    let classCompleted = 'todo__task';
    let classLabel = 'todo__label';
    let classDelete = 'todo__delete';

    if(todo.completed) {
      classCompleted += ' todo__task--completed';
    } 

    var task = <span onDoubleClick={ todo.completed ? undefined : this.handleEdit } className={ classCompleted }>{ todo.text }</span>;

    if(this.state.edit) {
      task = <TodoInput onEdited={ this.handleEdit } indexForEdit={ index } text={ todo.text }></TodoInput>;
      classLabel += ' todo__label--edit-todo'; 
      classDelete += ' todo__delete--edit-todo';
    }

    return (
    <div className='todo'>
      <label className={ classLabel }>
        <input onClick={ () =>  onToggleTodo(index) } type='checkbox' className='todo__checkbox' checked={ todo.completed } readOnly/>
        <i></i>
      </label>
      { task }
      <button onClick={ () => onDeleteTodo(index) } className={ classDelete }>&#735;</button>
    </div>
    )
  }

  handleEdit = () => {
    this.setState({
      edit: !this.state.edit,
    })
  }
}

export default Todo;

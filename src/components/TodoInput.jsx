import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTodo, editTodo } from '../actions';

import './css/TodoInput.css';

class TodoInput extends Component {
  state = {
    inputText: this.props.text || ''
  };

  handleInputText = (e) => {
    this.setState({
      inputText: e.target.value,
    });
  }
  
  handlePressEnter = (e) => {
    // console.log('TodoInput - handlePressEnter || props.indexForEdit: ', this.props.indexForEdit);
    let todos =  this.props.todos;
    let indexForEdit = this.props.indexForEdit;
    let newTask = this.state.inputText; 

    if(e.key === 'Enter' && this.props.text) {

      if(testTask(todos, newTask, indexForEdit)) {
        return false;
      }
      
      this.props.onEdited();
      this.props.dispatch(editTodo(indexForEdit, this.state.inputText));
      
    } else if(e.key === 'Enter') {

      if(testTask(todos, newTask, indexForEdit)) {
        return false;
      }

      this.props.dispatch(addTodo(newTask));
      this.setState({
        inputText: '',
      });
    }
  }

  lostedFocus = (e) => {
    // console.log('lostedFocus || e.currentTarget ', );
    let todos = this.props.todos;
    let indexForEdit = this.props.indexForEdit;
    let newTask = this.state.inputText;
  
    if(this.props.text) {
      if(testTask(todos, newTask, indexForEdit)) {
        return false;
      }
      
      this.props.onEdited();
      this.props.dispatch(editTodo(indexForEdit, this.state.inputText));
    }
  }

  render () {
    let className = 'todo-input__box';
    let placeholder = 'What needs to be done?';
    if(this.props.text) {
      className += ' todo-input__box--edit-todo';
      placeholder = '';
    }
    return(
      <div className={ className }>
        <input 
          onChange={ this.handleInputText } 
          onKeyDown={ this.handlePressEnter } 
          onBlur={ this.lostedFocus }
          type='text' 
          className='todo-input__field' 
          placeholder={ placeholder } 
          value={ this.state.inputText }
        />
      </div>
    );
  }
}

function testTask(todos, newTask, indexForEdit){
  if(newTask === '') {
    alert('Вы ничего не ввели');
    return true;
  }

  for (let i = 0; i < todos.length; i++) {
    let currentTask = todos[i].text;
    if(currentTask === newTask && i !== indexForEdit) {
      alert('Такая задача уже существует');
      return true;
    }
  }

  return false;
}

function mapStateToProps(state) {
  return {
    todos: state.todos,
  } 
}

export default connect(mapStateToProps)(TodoInput);

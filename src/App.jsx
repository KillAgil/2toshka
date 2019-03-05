import React, { Component } from 'react';

import TodoInput from './components/TodoInput';
import VisibleTodoList from './containers/VisibleTodoList';
import TodoFilter from './components/TodoFilter';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className='wrapper'>
        <TodoInput></TodoInput>
        <VisibleTodoList></VisibleTodoList>
        <TodoFilter></TodoFilter>
      </div>
    );
  }
}

export default App;

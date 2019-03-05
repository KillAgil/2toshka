import React from 'react';
import { connect } from 'react-redux';

import { clearCompleted, setActiveFilter, filters } from '../actions';

import './css/TodoFilter.css';
const TodoFilter = ({ activeFilter, itemLeft, amountTodo, clearCompleted, showAll, showActive, showCompleted }) => (
  <div className={ !amountTodo ? 'todo-filter__box hidden' : 'todo-filter__box' }>

    <div className='todo-filter__wrap todo-filter__comp-count'>
      <span> { itemLeft } {itemLeft === 1 ? 'item' : 'items'} left</span>  
    </div>

    <div className='todo-filter__wrap todo-filter__filters'>
      <button className={ activeFilter === filters.SHOW__ALL ? 'btn btn--focus' : 'btn' } onClick={ () => showAll() }>All</button>
      <button className={ activeFilter === filters.SHOW__ACTIVE ? 'btn btn--focus' : 'btn' } onClick={ () => showActive() }>Active</button>
      <button className={ activeFilter === filters.SHOW__COMPLETED ? 'btn btn--focus' : 'btn' } onClick={ () => showCompleted() }>Completed</button>
    </div>

    <div className="todo-filter__wrap todo-filter__comp-clear">
      <button onClick={ () => clearCompleted() } className='btn'>Clear Completed</button>  
    </div>

  </div>
);

function countCompleted(todos) {
  let count = 0;

  for(let i = 0; i < todos.length; i++) {
    if(todos[i].completed) {
      count++;
    }
  }

  return count;
}

function mapStateToProps(state) {
  return {
    activeFilter: state.activeFilter,
    itemLeft: countCompleted(state.todos),
    amountTodo: state.todos.length,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    clearCompleted: () => {
      dispatch(clearCompleted())
    },
    showAll: () => { 
      dispatch(setActiveFilter(filters.SHOW__ALL))
    },
    showCompleted: () => {
      dispatch(setActiveFilter(filters.SHOW__COMPLETED))
    },
    showActive: () => {
      dispatch(setActiveFilter(filters.SHOW__ACTIVE))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoFilter);

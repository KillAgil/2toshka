import { connect } from 'react-redux';

import { toggleTodo, delTodo, filters } from '../actions';
import TodoList from '../components/TodoList';

function filterTodo(todos, filter) {
    if(filter === filters.SHOW__ALL){
        return todos;
    }

    let filteredTodo = [];
    
    for(let i = 0; i < todos.length; i++) {
        if(filter === filters.SHOW__ACTIVE && !todos[i].completed) {
            filteredTodo.push(todos[i]);
        } else if(filter === filters.SHOW__COMPLETED && todos[i].completed) {
            filteredTodo.push(todos[i]);
        }
    }

    return filteredTodo;
}

function mapStateToProps(state) {
    return {
        activeFilter: state.activeFilter,
        todos: filterTodo(state.todos, state.activeFilter),
    } 
}

function mapDispatchToProps(dispatch) {
    return {
        onToggleTodo: (index) => {
            dispatch(toggleTodo(index))
        },
        onDeleteTodo: (index) => {
            dispatch(delTodo(index))
        }
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);
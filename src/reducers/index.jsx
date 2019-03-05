import { combineReducers } from 'redux';
import activeFilter from './filter';
import todos from './todo';

const todoApp = combineReducers({
    activeFilter,
    todos
});

export default todoApp;
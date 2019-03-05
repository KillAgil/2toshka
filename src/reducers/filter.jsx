import { typesAction, filters } from '../actions'; 

export default function activeFilter(state = filters.SHOW__ALL, action) {
  // console.log('reduser - activeFilter || action', action); - при рендере в консоль выводится что-то ... Происходит инициализация ? 
  if (action.type === typesAction.SET__ACTIVE__FILTER) {
    // console.log('reduser - activeFilter || action', action);
    return action.filter;  
  } 

  return state;
} 
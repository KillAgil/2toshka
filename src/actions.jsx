
export const typesAction = {
  ADD__TODO: 'ADD__TODO',
  EDIT__TODO: 'EDIT__TODO',
  TOGGLE__TODO: 'TOGGLE__TODO',
  DEL__TODO: 'DEL__TODO',
  SET__ACTIVE__FILTER: 'SET__ACTIVE__FILTER',
  CLEAR__COMPLETED: 'CLEAR__COMPLETED'
} 

export const filters = {
  SHOW__ALL: 'SHOW__ALL',
  SHOW__COMPLETED: 'SHOW__COMPLETED',
  SHOW__ACTIVE: 'SHOW__ACTIVE',
} 

// Function's Todo

export function addTodo(text) {
  return { type: typesAction.ADD__TODO, text }
}

export function editTodo(index, text) {
  return { type: typesAction.EDIT__TODO, index, text }
}

export function toggleTodo(index) {
  return { type: typesAction.TOGGLE__TODO, index }
}

export function delTodo(index) {
  return { type: typesAction.DEL__TODO, index }
}

export function clearCompleted(){
  return { type: typesAction.CLEAR__COMPLETED }
}

// Function Filter

export function setActiveFilter(filter) {
  return { type: typesAction.SET__ACTIVE__FILTER, filter }
}




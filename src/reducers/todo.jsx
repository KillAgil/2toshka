import { typesAction } from '../actions'; 

export default function todos(state = [], action) {
    // console.log('reduser - todos || action',action); - при рендере в консоль выводится что-то... Происходит инициализация ?  
    switch (action.type) {
        case typesAction.ADD__TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false,
                }
            ]
        case typesAction.EDIT__TODO:
            // console.log('reduser EDIT__TODO || state:\n', state);
            // console.log('reduser EDIT__TODO || action.index:', action.index);
            // console.log('reduser EDIT__TODO || action.text:', action.text);
            console.log('');
            return state.map((todo, index) => {
                if(index === action.index) {
                    return Object.assign({}, todo, {
                        text: action.text,
                    })
                }

                return todo;
            })
            
        case typesAction.TOGGLE__TODO:
            // console.log('');
            // console.log('reducer TOGGLE__TODO || state:\n', state);
            // console.log('reducer TOGGLE__TODO || action.index:', action.index);
            return state.map((todo, index) => {
                // console.log('reducer TOGGLE__TODO || todo.index', index);
                if(index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed,
                    });
                }

                return todo;

            })
        case typesAction.DEL__TODO:
            let copyState = Object.assign([], state);
            copyState.splice(action.index, 1);

            return copyState;
        
        case typesAction.CLEAR__COMPLETED:
            // пытался написать let, почему-то выдает ошибку компиляции - "переменная уже объявленна", странно ...
            // console.log('reduser CLEAR__COMPLETED || state:\n', state);
            // console.log('reduser CLEAR__COMPLETED || action:\n', action);

            copyState = Object.assign([], state);

            copyState.sort(function(aTodo, bTodo){
                return Number(aTodo.completed) - Number(bTodo.completed) 
            });
            // console.log('reduser CLEAR__COMPLETED || sorted copyState', copyState);

            for(let i = 0; i < copyState.length; i++) {
                // console.log('reduser CLEAR__COMPLETED || copyState['+i+'].completed', copyState[i].completed);
                if(copyState[i].completed){
                    copyState.splice(i);
                }
            }
            // console.log('reduser CLEAR__COMPLETED || result copyState', copyState);
            return copyState;
        default:
            return state;
    }
} 
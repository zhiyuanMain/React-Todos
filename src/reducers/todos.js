import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../actions';

const todos = (state = [], action) => {
    switch(action.type) {
        case ADD_TODO: 
            return [
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                },
                ...state
            ];
        case TOGGLE_TODO: 
            return state.map(todo => 
                (todo.id === action.id) ? {...todo, completed: !todo.completed} : todo
            );
        case DELETE_TODO:
            return state.filter(todo => {
                return todo.id !== action.id;
            })
        default: return state;
    }
}

export default todos;
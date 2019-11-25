// combineReducers로 리듀서를 합쳐서 내보낸다
import input from './input';
import todos from './todos';
import { combineReducers } from 'redux';

export default combineReducers({
    input,
    todos
});


import { Map } from 'immutable';
import { handleActions, createAction } from 'redux-actions';


// 현재 인풋 내용을 설정하는 액션
// 액션 타입 정의
const SET_INPUT = 'input/SET_INPUT'; // input: 리듀서 이름

// 액션 생성 함수
export const setInput = createAction(SET_INPUT);

// 초기상태 정의
const initialState = Map({
    value: '',
})

// 리듀서 정의
export default handleActions({
    [SET_INPUT]: (state, action) => {
        return state.set('value', action.payload)
    }
}, initialState);


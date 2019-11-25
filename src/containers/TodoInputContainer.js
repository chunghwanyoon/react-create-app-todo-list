import React, { Component } from 'react';
import TodoInput from '../components/TodoInput';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// 액션 생성 함수들을 한꺼번에 불러온다.
import * as inputActions from '../modules/input';
import * as todosActions from '../modules/todos';

class TodoInputContainer extends Component {
    id = 1
    
    getId = () => {
        return ++this.id;
    }

    handleChange = (e) => {
        const { value } = e.target; // e.target.value
        const { InputActions } = this.props;
        InputActions.setInput(value)
    }

    handleInsert = () => {
        const { InputActions, TodosActions, value } = this.props;
        const todo = {
            id: this.getId(),
            text: value,
            done: false
        };
        TodosActions.insert(todo);
        InputActions.setInput('');
    }
    render() {
        const { value } = this.props;
        const { handleChange, handleInsert } = this;
        return (
            <TodoInput
                onChange={handleChange}
                onInsert={handleInsert}
                value={value}
            />
        );
    }
}


/**
 * 이번에는 mapStateToProps와 mapDispatchToProps 함수에 대한 레퍼런스를 따로 만들지 않고,
 * 그 내부에 바로 정의해본다;;
 */

export default connect(
    (state) => ({
        value: state.input.get('value')
    }),
    (dispatch) => ({
        /**
         * bindActionCreators를 사용하면 자동으로 다음 작업들을 합니다.
         * {
         *      actionCreator: (...params) => dispatch(actionCreator(...params))
         * }
         * 그래서 이전에 우리가 했던 것처럼 일일이 dispatch할 필요가 없다
         * 예를들어 Inputactions에는 다음 작업이 되어있다는데
         * InputActions: {
         *      setInput: (value) => dispatch(inputActions.setInput(value))
         * }
         * 나중에 이를 호출할 땐느 this.props.InputActions.setInput을 호출해라
         */
        InputActions: bindActionCreators(inputActions, dispatch),
        TodosActions: bindActionCreators(todosActions, dispatch)
    })
)(TodoInputContainer);

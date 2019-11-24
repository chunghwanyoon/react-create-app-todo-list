import React, { Component } from 'react';
import styles from './TodoItem.scss';
import classNames from 'classnames/bind';


const cx = classNames.bind(styles);

class TodoItem extends Component {
    // TodoItem은 토글되었을때만 업데이트
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.done !== nextProps.done;
    }

    render() {
        const {done, children, onToggle, onRemove} = this.props;
        /*
        앞 코드에서는 비구조화 할당을 이용하여 this.props 안에 있는 요소들의 레퍼런스를 만듦.
        */
    return (
        <div className={cx('todo-item')} onClick={onToggle}>
            <input className={cx('tick')} type="checkbox" checked={done} readOnly/>
            <div className={cx('text', {done})}>{children}</div>
            <div className={cx('delete')} onClick={(e) => {
                onRemove();
                e.stopPropagation()
                }
            }>[지우기]</div>
        </div>
        );
    }
}

export default TodoItem;
import React from 'react';
import './Todo.css';

const todo = (props) => {
    return (
        <div className="todo_item">
            <input type="checkbox" className="item_status"/>
            <span className="item_name">{ props.name } { props.index }</span>
        </div>
    )
}

export default todo
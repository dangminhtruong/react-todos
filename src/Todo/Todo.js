import React from 'react';
import './Todo.css';

const todo = (props) => {
	return (
		<div className="todo_item col-md-6 col-lg-6 col-md-push-3 col-lg-push-3">
			<input type="checkbox" 
				className="item_status" 
				onChange= { props.click }
				checked = { props.setChecked }/>
			<span className="item_name">
				{ props.name } { props.index }
			</span>
			<button className="btn btn-xs pull-right"
				onClick = { props.remove }>
                remove
			</button>
		</div>
	);
};

export default todo;
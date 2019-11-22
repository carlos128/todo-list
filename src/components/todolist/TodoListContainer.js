import React, { Component } from 'react';
import TodoListView from './TodoListView';

class TodoListContainer extends Component {

	render() {
		const { data,onNewTask,onRowDelete } =  this.props
		return (
		   <React.Fragment>
			<TodoListView
        data= {data}
        onRowDelete={ onRowDelete }
			/>
		   </React.Fragment>
		);
	}
}

export default TodoListContainer;


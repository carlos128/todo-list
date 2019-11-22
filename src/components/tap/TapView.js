import React  from 'react';
import { Tabs } from 'antd';
import TodoListContainer from '../../components/todolist/TodoListContainer';

function  TapView( props ){

	const { TabPane } = Tabs;
	const { data,onRowDelete } = props;
	return(
	
		<React.Fragment>
			<Tabs defaultActiveKey="1">
				<TabPane tab="List  Task " key="1">
					 Task 
					<TodoListContainer
              data= {data}
              onRowDelete={onRowDelete}
							/>
				</TabPane>
				<TabPane tab="In Progress" key="2">
					Task  In Progress
					<TodoListContainer
								data= {data}
                onRowDelete={onRowDelete}/>
				</TabPane>
				<TabPane tab="Finished" key="3">
					Task Finished
					<TodoListContainer
									data= {data}
                  onRowDelete={onRowDelete}/>
				</TabPane>
			</Tabs>
		</React.Fragment>
	);

}

export  default  TapView;
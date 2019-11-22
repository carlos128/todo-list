import  React  from 'react';
import { Table, Divider, Tag } from 'antd';
const columns = [
  { 
	title: 'ID',
	dataIndex: 'id',
	key: 'id',
	render: text => <a>{text}</a>,
  },
  { 
	title: 'Name  Task',
	dataIndex: 'name',
	key: 'name',
	id:'date',
	render: text => <a>{text}</a>,
  },
  { 
	title: 'Descripcion',
	dataIndex: 'descripcion',
	key: 'descripcion',
	render: text => <a>{text}</a>,
  }

];
function  TodoListView( props ){
	const  { data,onRowDelete } =  props;

  const rowSelection = {
	onChange: (id) => {
	  onRowDelete(id)
	},
	getCheckboxProps: record => ({
	  disabled: record.name === 'Disabled User', // Column configuration not to be checked
	  name: record.name,
	}),
  };
  
	return(

			<React.Fragment>
					
				<Table  rowSelection={rowSelection} columns={columns} dataSource={data} />

			</React.Fragment>
		);
}

export  default  TodoListView;
import  React  from  'react';
import { PageHeader,Button,Input} from 'antd';
import   './Header.css';

function  HeaderView( props ){
	const {onNewTask,setValueToState,onSetValueAction} = props;
	return(

		<React.Fragment>
			
			<PageHeader
				style={{
				border: '1px solid rgb(235, 237, 240)',
				}}
				onBack={() => null}
				title="All List"
				subTitle="Enter this  Task "
				extra={[
					<Input key="1" size="small" placeholder="Task  Name" name="nametask"
						onChange= { event => setValueToState(event.target)}/>,
					<Input key="2" size="small" placeholder="Description"  name="descriptiontask"
					 	 onChange={ event=> setValueToState(event.target) }/>,
					<Button key="3" onClick={onNewTask}>Add Task </Button>,
					<Button key="4" onClick={ event => onSetValueAction( event.target )}  name="IN_PROSGRESS">In Progress </Button>,
					<Button key="5" onClick={ event => onSetValueAction( event.target ) } name="FINISHED">Finished </Button>,
				]}
			/>

			<div className="col-6">
				{props.children}
			</div>
		</React.Fragment>
	);
}

export  default  HeaderView;
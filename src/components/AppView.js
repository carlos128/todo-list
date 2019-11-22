import  React  from 'react';
import  App  from  './App.css';
import HeaderContainer from '../components/header/HeaderContainer';
import TapContainer from '../components/tap/TapContainer';
function  AppView( props ){
	const {
			onNewTask,
			data,
			action,
			onRowId,
			setValueToState,
			onRowDelete,
			onSetValueAction
		} = props;
	
	return(
		
		<React.Fragment>
			<div className="container-fluid">
				<div className="row d-flex justify-content-center">
					<div className="col-7 contendor">
		<HeaderContainer
			  data={data}
			  setValueToState={setValueToState}
			  onSetValueAction={onSetValueAction} 
			  onRowId={onRowId}/>
		<TapContainer 
						data={data}
						onNewTask={onNewTask}
						onRowDelete={onRowDelete}/>
			</div>
				  
				</div>

			</div>
		</React.Fragment>
	);
}

export  default AppView;
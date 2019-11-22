import React, { Component } from 'react';
import AppView  from './AppView';
class App extends Component {
	//Inicilizacion
	state={
				idRow: [],
				data: [],
				progress:[],
				finished:[]
	}
	
	//funciones w
	setValueToState = (data) =>{
		this.setState({
 
		 data:[
			 ...this.state.data,
				{
					id:Date.now(),
					name:data.nametask,
					descripcion:data.descriptiontask,
					key:Date.now(),
				 
				}
			]
	 })
 
	}
	/*onRowDelete  = ( id  ) =>{
    
		const {  data } =  this.state;
		const found = data.find(element => element > id);
		if( found === -1 ) {return };
		const newItem  = data.slice();
		newItem.splice(found,1);

		this.setState({
			 data :  newItem
		});

			}*/
			onRowDelete=(id)=>{
				this.setState({
					idRow:id
				})
				console.log(id)
			}
   onSetValueAction=(actions)=>{
    this.props.action= actions
   }
	//fin funciones 
	render() {
    const { data} = this.state;
    const { action  } =this.props
		return (
			<React.Fragment>
				<AppView 
					data={data}
										setValueToState={this.setValueToState}
										onRowDelete={this.onRowDelete}
										onRowId = { this.state.idRow}
										action={ action }
										 >
				</AppView>
			</React.Fragment>
		);
	}
}

export default App;
import React, { Component } from 'react';
import HeaderView  from  './HeaderView';
import { identifier } from '@babel/types';

export class HeaderContainer extends Component {
	//<pre>{JSON.stringify(this.state, null, 2)}</pre>
	state={
		nametask:'',
		descriptiontask: '',
		id:'',
		key:'',
		data:[],
		progress:[],
		finished:[]
	}
	setValueToState= ( {name, value} )=>{
			this.setState(()=>{
				return {  
					[ name ]: value,
				
				}
			});
	};
	

	onNewTask= ()=>{
		const  model = { ...this.state }
		this.props.setValueToState( model  );
		
	}
	onSetValueAction=({ name })=>{
		
		const {  data } =  this.state;
		const found = data.find(element => element > this.props.onRowId);
		if( found === -1 ) {return };
		const newItem  = data.slice();
		newItem.splice(found,1);
		switch (name) {
			case "IN_PROSGRESS":
				 this.setState({
					 progress:newItem
				 })
				
				break;
		
			default:
				break;
		}
	}
	 deleRowData=( data )=>{
		//data.splice(found,1);
	 }
	render() {
	return (
		
		<React.Fragment>
			<HeaderView 
				onRowDelete={this.onRowDelete}
				onNewTask={ this.onNewTask }
				setValueToState= {this.setValueToState}
				onSetValueAction={this.onSetValueAction}
			/>
		</React.Fragment>
	);
	}
}

export  default  HeaderContainer;

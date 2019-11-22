import React, { Component } from 'react';
import   TapView  from  './TapView';

class TapContainer extends Component {

	state={
		data:[],
		progress:[],
		finished:[]
	}
	constructor(props) {
		super(props);
	
	
	}

	/*onRowDelete=( id )=>{
		 console.log(id)
		 
	}*/
	render() {
		this.state= { 
			data:this.props.data
		}
		const {data}  =  this.state;
		const {onRowDelete} = this.props;
		return (
			<React.Fragment>
				<TapView 
				data={data}
				onRowDelete={onRowDelete}/>
			</React.Fragment>
		);
	}
}

export default TapContainer;
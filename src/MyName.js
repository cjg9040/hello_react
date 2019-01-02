import React, { Component } from 'react';

class MyName extends Component{
	// static defaultProps ={
	// 	name: 'base name'
	// }
	render(){
		return(
			<div>
				My name is <b>{this.props.name}.</b>
			</div>
			);
	}
}
MyName.defaultProps ={
	name :'base name'
};
export default MyName;
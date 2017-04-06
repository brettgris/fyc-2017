import React, {Component} from 'react';
import {Link} from 'react-router';

import ShowItem from './children/ShowItem.jsx';

class Shows extends Component{
	constructor(props){
		super(props);

		this.state = {
			color: "transparent"
		}

		this.handleHover = this.handleHover.bind(this);
	}

	handleHover(over,data){
		// this.setState({
		// 	color: (over) ? data.color : 'transparent'
		// });
	}

	render(){
		return(
			<div className="showlist">
				<div className="wrapper">
					<div className="content">
						{ this.createShowList() }
					</div>
				</div>
			</div>
		);
	}

	createShowList(){
		return this.props.shows.map( (d,k)=>{
			return <ShowItem key={"key"+k} data={d} handleHover={ (over)=>this.handleHover(over,d)} guild={this.props.guild} />
		});
	}
};

export default Shows;

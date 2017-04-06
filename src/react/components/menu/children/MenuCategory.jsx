import React, {Component} from 'react';

import MenuItem from './MenuItem.jsx';

class MenuCategory extends Component{
	render(){
		return(
			<div className="category">
				<h3>{this.props.data.name}</h3>
				{ this.createShows() }
			</div>
		);
	}

	createShows(){
		return this.props.data.shows.map( (data,key)=>{
			return (
				<MenuItem data={data} key={'menulink'+data.safename} guild={this.props.guild} />
			)
		});
	}
};

export default MenuCategory;

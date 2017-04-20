import React, {Component} from 'react';
import ShowItem from './ShowItem.jsx';

class ShowCategory extends Component{
	render(){
		return (
			<div className={"category "+this.props.data.safename}>
				<h3>{this.props.data.name}</h3>
				<div className="shows">
					{ this.createShows() }
				</div>
			</div>
		);
	}

	createShows(){
		return this.props.data.shows.map( (data,key)=>{
			return (
				<ShowItem key={"show"+data.safename} data={data} catdata={this.props.data} guild={this.props.guild} />
			);
		});
	}
};

export default ShowCategory;

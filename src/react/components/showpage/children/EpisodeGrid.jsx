import React, {Component} from 'react';
import {connect} from 'react-redux';

import EpisodeItem from './EpisodeItem.jsx';

class EpisodeGrid extends Component{
	constructor(props){
		super(props);
	}

	render(){
		let eps = this.props.data.episodes.find( (item)=>item.id );
		if (!eps) return null;
		//if (this.props.data.category==='movie'||!eps) ? " hide" : "";
		return(
			<div className={"episodes"}>
				<h3>Episodes</h3>
				<div className="episode-list">
					{ this.createEpisodes() }
				</div>
			</div>
		);
	}

	createEpisodes(){
		return this.props.data.episodes.map( (data,key)=>{
			return (
				<EpisodeItem key={"episode"+key} data={data} episode={this.props.episode} show={this.props.show} guild={this.props.guild} />
			)
		});

	}
};


export default EpisodeGrid;

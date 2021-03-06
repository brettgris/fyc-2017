import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'underscore';

import EpisodeItem from './EpisodeItem.jsx';

class EpisodeGrid extends Component{
	constructor(props){
		super(props);
	}

	render(){
		let eps = _.find( this.props.data.episodes, (item)=>item.id );
		if (!eps||this.props.data.film==="true") return null;
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

import React, {Component} from 'react';
import {Link} from 'react-router';

import VideoCode from './VideoCode.jsx';

class VideoPlayer extends Component{
	constructor(props){
		super(props);
		this.id = null;
	}

	render(){
		let ep = this.props.data.episodes.find( (data,v)=>{
			this.id = v;
			return data.number===this.props.episode.num;
		});
		if (!ep||!ep.id) return null;

		return(
			<div className="videoplayer">
				<div className="row">
					<div className='videoBox col-md-6'>
						<VideoCode vid={ep.id} />
					</div>
					<div className='videoInfo col-md-6'>
						<h1>{this.props.data.name}</h1>
						<h4>Ep {ep.number} - <span className="highlight">{ep.name}</span></h4>
						<p> {ep.synopsis}</p>
						{ this.handleNextEpisode() }
					</div>
				</div>
			</div>
		);
	}

	handleNextEpisode(){
		if (this.id+1<this.props.data.episodes.length&&this.props.data.episodes[this.id+1].id){
			return (
				<Link className="episodeButton button" to={`/${this.props.guild}/${this.props.data.safename}/${this.props.data.episodes[this.id+1].number}`}>Watch Next Episode</Link>
			)
		}
	}
};

export default VideoPlayer;

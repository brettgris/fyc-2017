import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import Video from 'react-html5video';

class Trailer extends Component{
	render(){
		if (this.props.episode.num!=="trailer") return null;
		return(
			<div className="trailer">
				<div className="trailer-container">
					<Link className="exitbtn" to={`/${this.props.guild}/${this.props.show.safename}`}>
						<img src="/img/exit.png" />
					</Link>
					<Video width="100%" controls unmuted autoPlay>
						<source src={`../img/video/${this.props.show.safename}.mp4`} type="video/mp4" />
	  				</Video>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		episode: state.episode || null
	};
}

export default connect(mapStateToProps)(Trailer);

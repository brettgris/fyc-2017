import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

class Trailer extends Component{
	render(){
		if (this.props.episode.num!=="trailer" || this.props.show.trailer==="") return null;
		return(
			<div className="trailer">
				<div className="trailer-container">
					<Link className="exitbtn" to={`/${this.props.guild}/${this.props.show.safename}`}>
						<img src="/img/exit.png" />
					</Link>
					<div className="video-container">
						<div className="video-player">
							<iframe src={this.props.show.trailer+"?footer=false&cid=starzfyc2017trailer"} frameBorder="0" scrolling="no" width="100%" height="100%"></iframe>
						</div>
					</div>
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

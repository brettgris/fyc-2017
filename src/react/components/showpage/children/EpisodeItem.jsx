import React, {Component} from 'react';
import {Link} from 'react-router';

class EpisodeItem extends Component{
	render(){
		if (!this.props.data.id) return null;

		const style = {
			backgroundImage: 'url(/img/episode/'+this.props.show.safename+'/'+this.props.data.number+'.jpg)'
		}
		return(
			<div className="episode">
				<Link className="wrapper" to={`/${this.props.guild}/${this.props.show.safename}/${this.props.data.number}`}>
					<div className="image" style={style}>
						<div className="overlay">
							<p><i className="fa fa-play" aria-hidden="true"></i></p>
						</div>
					</div>
					<h4>
						Ep {this.props.data.number} - <span className="highlight">{this.props.data.name}</span>
					</h4>
				</Link>
			</div>
		);
	}
};

export default EpisodeItem;

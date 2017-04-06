import React, {Component} from 'react';

import HeaderManager from './children/HeaderManager.jsx';
import EpisodeGrid from './children/EpisodeGrid.jsx';

class ShowDetails extends Component{
	render(){
		return(
			<div className="showdetails container-fluid">
				<div className="showpage">
					<HeaderManager data={this.props.data} episode={this.props.episode} show={this.props.show} guild={this.props.guild} />
					<EpisodeGrid data={this.props.data} episode={this.props.episode} show={this.props.show} guild={this.props.guild} />

				</div>
			</div>
		);
	}
};

/* <p className="spoiler">
	{this.props.data.spoiler}
</p> */

export default ShowDetails;

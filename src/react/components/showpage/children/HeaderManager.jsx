import React, {Component} from 'react';
import auth from '../../../services/authenticate.jsx';

import ShowHeader from './ShowHeader.jsx';
import VideoPlayer from './VideoPlayer.jsx';

class HeaderManager extends Component{
	render(){
		let Module = (auth.show(this.props.episode)) ? VideoPlayer : ShowHeader;

		return(
			<div className="showheader">
				<Module data={this.props.data} guild={this.props.guild} episode={this.props.episode} />
			</div>
		);
	}
};

export default HeaderManager;

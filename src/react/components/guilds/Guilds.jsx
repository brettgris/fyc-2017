import React, {Component} from 'react';

import GuildItem from './children/GuildItem.jsx';

class Guilds extends Component {
	render(){
		return(
			<div className="guildslist container">
				{ this.createGuilds() }
			</div>
		);
	}

	createGuilds(){
		return this.props.data.map( (data, key)=>{
			return (
				<GuildItem key={"guild"+key} data={data} />
			)
		});
	}
};


export default Guilds;

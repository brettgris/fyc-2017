import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setBackground, setGuild} from '../actions/actions.jsx';

import Shows from '../components/shows/Shows.jsx';

class GuildPage extends Component{
	componentDidMount(){
		this.props.setBackground("img/background2.jpg");
		this.props.setGuild(this.props.params.guildname);
	}

	render(){
		if (!this.props.shows) return null;

		return (
			<div id="#wrapper" className="page">
				<Shows shows={this.props.shows} guild={this.props.guild} />
			</div>
		)
	}
};

function mapStateToProps(state) {
	let shows = null;
	// // let data = null;
	if (state.data&&state.guild) {
		shows = state.data.shows.filter( (d)=>d.guilds.includes(state.guild) )

		//---CATEGORIES---
		// data = state.data.categories.map( (cat,key) => {
		// 	cat.shows = state.data.shows.filter( (show,key) => {
		// 		return (show.guilds.includes(state.guild)&&show.category===cat.safename);
		// 	});
		// 	return cat;
		// } );
	}

	return {
		shows: shows || null,
		guild: state.guild || ""
	};
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		setBackground: setBackground,
		setGuild: setGuild
	}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(GuildPage);

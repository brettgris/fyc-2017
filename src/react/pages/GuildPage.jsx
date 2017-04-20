import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setBackground, setGuild} from '../actions/actions.jsx';
import _ from 'underscore';

import Shows from '../components/shows/Shows.jsx';

class GuildPage extends Component{
	componentDidMount(){
		this.props.setBackground("img/background2.jpg");
		this.props.setGuild(this.props.params.guildname);
	}

	render(){
		if (!this.props.cats) return null;

		return (
			<div id="#wrapper" className="page">
				<Shows cats={this.props.cats} guild={this.props.guild} />
			</div>
		)
	}
};

function mapStateToProps(state) {
	let cats = null;
	//let shows = null;


	if (state.data&&state.guild) {
		//let shows = _.filter( state.data.shows, (d)=>_.contains(d.guilds,state.guild));

		cats = state.data.categories.map( (cat,key)=>{
			cat.shows = _.filter ( state.data.shows, (show,sk)=>{
				return (show.category===cat.safename)&&( _.contains( show.guilds, state.guild ) );
			})
			return cat;
		});
	}

	return {
		cats: cats || null,
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

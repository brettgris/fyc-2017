import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setBackground, setGuild, setShow,setEpisode} from '../actions/actions.jsx';
import _ from 'underscore';

import Login from '../components/login/Login.jsx';
import Trailer from '../components/trailer/Trailer.jsx';
import ShowDetails from '../components/showpage/ShowDetails.jsx';

class ShowPage extends Component{
	constructor(props){
		super(props);
	}

	componentDidMount(){
		this.updateModels();
	}

	componentDidUpdate(){
		this.updateModels();
	}

	updateModels(){
		if (this.props.params.guildname!==this.props.guild) this.props.setGuild(this.props.params.guildname);
		if (this.props.params.showname!==this.props.show) this.props.setShow(this.props.params.showname);

		let episode = (this.props.params.episodenum) ? this.props.params.episodenum : null;

		if (!this.props.episode||episode!==this.props.episode.num) {
			this.props.setEpisode({
				guild: this.props.params.guildname,
				show: this.props.params.showname,
				num: (this.props.params.episodenum) ? this.props.params.episodenum : null
			});
		}

		if(this.props.show) this.props.setBackground(`img/bg/${this.props.show.safename}.jpg`)
	}

	render(){
		if ( !this.props.shows || !this.props.show ) return null;

		return (
			<div id="wrapper" className="page">
				<ShowDetails data={this.props.show} episode={this.props.episode} guild={this.props.guild} show={this.props.show} />
				<Trailer guild={this.props.guild} show={this.props.show} />
				<Login guild={this.props.guild} show={this.props.show} />
			</div>
		);
	}
};

function mapStateToProps(state) {
	let shows = null;
	// // let data = null;
	if (state.data&&state.guild) {
		//shows = state.data.shows.filter( (d)=>d.guilds.indexOf(state.guild)>-1 )
		shows = _.filter( state.data.shows, (d)=>_.contains(d.guilds,state.guild));

		//---CATEGORIES---
		// data = state.data.categories.map( (cat,key) => {
		// 	cat.shows = state.data.shows.filter( (show,key) => {
		// 		return (show.guilds.includes(state.guild)&&show.category===cat.safename);
		// 	});
		// 	return cat;
		// } );
	}

	//let show = (state.data&&state.show) ? state.data.shows.find( (data)=>data.safename===state.show ) : null;

	let show = (state.data&&state.show) ? _.find( state.data.shows, (data)=>data.safename===state.show) : null;

	return {
		shows: shows || null,
		guild: state.guild || "",
		show: show || null,
		episode: state.episode || null
	};
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		setBackground: setBackground,
		setGuild: setGuild,
		setShow: setShow,
		setEpisode: setEpisode
	}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(ShowPage);

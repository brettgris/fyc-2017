import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {showHideMenu} from '../../actions/actions.jsx';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import MenuItem from './children/MenuItem.jsx';
import _ from 'underscore';

class Menu extends Component {
	constructor(props){
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(){
		this.props.showHideMenu(!this.props.menu);
	}

	render(){
		if (!this.props.guild) return null;
		return(
			<ReactCSSTransitionGroup
          	transitionName="animation"
          	transitionEnterTimeout={500}
         	transitionLeaveTimeout={500}
			>
				{ this.handleVisible() }
			</ReactCSSTransitionGroup>
		);
	}

	handleVisible(){
		if (this.props.menu){
			return (
				<div className={"menu"}>
					<div className="menu-list">
						<div className="closebtn">
							<a onClick={ ()=>this.props.showHideMenu(false) }>
								<img src="/img/exit.png" />
							</a>
						</div>
						<h3>
							<Link onClick={this.handleClick} to={"/"+this.props.guild}>Home</Link>
						</h3>
						{ this.createShows() }
					</div>
				</div>
			);
		}
	}

	createShows(){
		if( !this.props.shows) return null;

		return this.props.shows.map( (data,key)=>{
			return (
				<MenuItem key={"menuitem"+key} data={data} guild={this.props.guild} />
			)
		});
	}
};

function mapStateToProps(state) {
	let shows = null;

	if (state.data&&state.guild) {
		//shows = state.data.shows.filter( (d)=>d.guilds.indexOf(state.guild)>-1 )
		shows = _.filter( state.data.shows, (d)=>_.contains(d.guilds,state.guild));
	}

	return {
		shows: shows || null,
		menu: state.menu,
		guild: state.guild
	};
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		showHideMenu: showHideMenu
	}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Menu);

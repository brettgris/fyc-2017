import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {showHideMenu} from '../../actions/actions.jsx';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import _ from 'underscore';

//import MenuItem from './children/MenuItem.jsx';
import MenuCategory from './children/MenuCategory.jsx';

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
		if( !this.props.cats) return null;

		// return this.props.shows.map( (data,key)=>{
		// 	return (
		// 		<MenuItem key={"menuitem"+key} data={data} guild={this.props.guild} />
		// 	)
		// });

		return this.props.cats.map( (data,key)=>{
			return (
				<MenuCategory key={"menycat"+key} data={data} guild={this.props.guild} />
			)
		});
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
		//shows: shows || null,
		cats: cats || null,
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

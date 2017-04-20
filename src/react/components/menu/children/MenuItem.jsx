import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {showHideMenu} from '../../../actions/actions.jsx';

class MenuItem extends Component {
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(){
		if(ga) ga('send', 'event', 'Show', 'Visit', this.props.data.name);
		this.props.showHideMenu(false);
	}

	render(){
		return (
			<div>
				<Link onClick={this.handleClick} to={"/"+this.props.guild+"/"+this.props.data.safename} >
					{this.props.data.name}
				</Link>
			</div>
		);
	}
};

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		showHideMenu: showHideMenu
	}, dispatch);
}

export default connect(null, mapDispatchToProps)(MenuItem);

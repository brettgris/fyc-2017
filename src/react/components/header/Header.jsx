import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {showHideMenu} from '../../actions/actions.jsx';

class Header extends Component{
	render(){
		return (
			<div className="header container-fluid">
				<Link className="logo" to="/"></Link>
				<h1 className="hidden-xs">FOR YOUR CONSIDERATION</h1>
				<h1 className='mobileHeader visible-xs'>FYC</h1>
				<div className="btn-wrapper">
					<div className="menu-btn" onClick={()=>this.props.showHideMenu(true)}>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
			</div>
		)
	}
};
function mapDispatchToProps(dispatch){
	return bindActionCreators({
		showHideMenu: showHideMenu
	}, dispatch);
}

export default connect(null,mapDispatchToProps)(Header);

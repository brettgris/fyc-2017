import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setBackground} from '../actions/actions.jsx';

import appHistory from '../services/appHistory.jsx';

import Guilds from '../components/guilds/Guilds.jsx';

class HomePage extends Component {
	componentDidMount(){
		this.props.setBackground("img/background2.jpg");
		this.checkForGuilds();
	}

	componentDidUpdate(){
		this.checkForGuilds();
	}

	checkForGuilds(){
		if (this.props.data && this.props.data.guilds.length===1) {
			appHistory.push('/'+this.props.data.guilds[0].safename);
		}
	}

	render() {
		if (!this.props.data) return null;

		return (
			<div id="#wrapper" className="page">
				<Guilds data={this.props.data.guilds} />
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		data: state.data || null,
	};
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		setBackground: setBackground
	}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(HomePage);

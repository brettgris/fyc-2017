import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchData} from '../actions/actions.jsx';

import Header from '../components/header/Header.jsx';
import Footer from '../components/footer/Footer.jsx';
import Menu from '../components/menu/Menu.jsx';

class BasePage extends Component{
	componentDidMount(){
		this.props.fetchData();
	}

	render(){
		let style = {
			backgroundImage: `url(${this.props.background})`
		}
		return (
			<div id="fyc" style={style}>
				<Header />
				<Menu />
				<div className="content">
					{this.props.children}
			  	</div>

				<Footer />
			</div>
		);
	}
};

function mapStateToProps(state) {
	return {
		background: state.background || null,
	};
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		fetchData: fetchData
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BasePage);

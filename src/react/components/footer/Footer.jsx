import React, {Component} from 'react';
import {connect} from 'react-redux';

import CopyrightItem from './children/CopyrightItem.jsx';

class Footer extends Component{
	render(){
		if (!this.props.data) return null;

		return (
			<div className="footer container">
				<div className="row">
					<p className="copyright center col-md-10 col-md-offset-1">
						<span>
							STARZ and related channels and service marks are the property of Starz Entertainment, LLC.
						</span>
						{ this.createCopyrightItems() }
					</p>
				</div>
			</div>
		)
	}

	createCopyrightItems(){
		return this.props.data.shows.map( (data,key) => {
			return (
				<CopyrightItem key={"copyright"+key} data={data} />
			);
		});
	}
}


function mapStateToProps(state) {
	return {
		data: state.data || null,
	};
}

export default connect(mapStateToProps)(Footer);

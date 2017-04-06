import React, {Component} from 'react';

import AwardItem from './AwardItem.jsx';

class AwardList extends Component {
	render(){
		return(
			<div className="awards">
				<div className="row">
					<div className="col-md-9 col-sm-12">
						<h3>For your consideration in</h3>
						<div className="row award-list">
							{ this.createAwards() }
						</div>
					</div>
				</div>
			</div>
		);
	}

	createAwards(){
		return this.props.data.awards[this.props.guild].map( (data,key)=>{
			return (
				<AwardItem key={"awards"+key} data={data} color={this.props.data.textcolor}/>
			)
		});

	}
};

export default AwardList;

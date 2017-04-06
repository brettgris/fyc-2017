import React from 'react';
import {Link} from 'react-router';

const awardItem = (props) => {
	const style = {
		color: props.color
	}
	return(
		<div className="award-item col-md-4 col-xs-6">
			<p style={style}>{props.data.title}</p>
		</div>
	);
};

export default awardItem;

import React from 'react';
import {Link} from 'react-router';

const GuildItem = (props) => {
	return (
		<div className="guild">
			<Link to={"/"+props.data.safename} >
				{props.data.name}
			</Link>
		</div>
	);
};

export default GuildItem;

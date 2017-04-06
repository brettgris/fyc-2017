import React from 'react';

const CopyrightItem = (props) => {
	return (
		<span dangerouslySetInnerHTML={{__html: '&nbsp;'+props.data.copyright }}></span>
	);
};

export default CopyrightItem;

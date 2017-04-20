import React, {Component} from 'react';
import {Link} from 'react-router';

class ShowItem extends Component {
	constructor(props){
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(){
		if (ga) ga('send', 'event', 'Show', 'Visit', this.props.data.name);
	}

	render(){
		const style = {
			'backgroundImage': 'url(img/key/'+this.props.data.safename+'.jpg)'
		}

		const taStyle = {
			'backgroundImage': 'url(img/ta/'+this.props.data.safename+'.png)'
		}

		//<div className="ta" style={taStyle}></div>

		//onMouseOver={ ()=>this.props.handleHover(true) }
		//nMouseOut={ ()=>this.props.handleHover(false) }

		return (
			<div className={"show"}>
				<Link
					onClick={this.handleClick}

					to={"/"+this.props.guild+"/"+this.props.data.safename}
					style={style}
				>
					<div className="copy">
						<h3>{this.props.data.name}</h3>

						<p>CLICK FOR MORE INFORMATION</p>
					</div>
				</Link>
			</div>
		);
	}
};

export default ShowItem;

import React, {Component} from 'react';
import {Link} from 'react-router'
import _ from 'underscore';

import AwardList from './AwardList.jsx';

class ShowHeader extends Component{
	render(){
		return(
			<div className="content">
				<div className="title-wrapper">
					<h1 className="title">
						{ this.handleTitle() }
						{ this.handleSeason() }
					</h1>
				</div>
				<div className="row show-detail">
					<div className='col-md-6 col-sm-9'>{this.handleDescription()}</div>
					<div className="buttons clear col-md-6 col-sm-9">
						<Link className="trailerButton button" to={`/${this.props.guild}/${this.props.data.safename}/trailer`}>Watch Trailer</Link>
						{ this.handleEpisodeButton() }
					</div>
				</div>
				<AwardList data={this.props.data} guild={this.props.guild} />
			</div>
		);
	}

	handleTitle(){
		// if (this.props.data.film==="true"){
		// 	return (
		// 		<span>{this.props.data.name}</span>
		// 	);
		// }else {
			return (
				<img className="img img-responsive" src={`/img/titles/${this.props.data.safename}.png`} />
			);
		//}
	}

	handleEpisodeButton(){
		let eps = _.find (this.props.data.episodes, (item)=>item.id );
		if (!eps) return null;

		if ( this.props.data.film==="true" ) {
			return (
				<Link className="episodeButton button" to={`/${this.props.guild}/${this.props.data.safename}/${this.props.data.episodes[0].number}`}>Watch Film</Link>
			);
		} else {
			return (
				<Link className="episodeButton button" to={`/${this.props.guild}/${this.props.data.safename}/${this.props.data.episodes[0].number}`}>Watch Episodes</Link>
			);
		}


	}

	handleDescription(){
		return this.props.data.description.map( (data,v)=>{
			return (
				<p key={"desc"+v} dangerouslySetInnerHTML={{__html:data}}></p>
			)
		});
	}

	handleSeason(){
		if (this.props.data.season) {
			return(
				<span className="season">
					{this.props.data.season}
				</span>
			)
		} else return null;
	}
};

export default ShowHeader;

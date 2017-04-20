import React, {Component} from 'react';
import {connect} from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import _ from 'underscore';

import EpisodeItem from './EpisodeItem.jsx';

class EpisodeList extends Component{
	constructor(props){
		super(props);

		this.state = {
			page: 0,
			direction: "forward",
			mobile: false
		};

		this.handleResize = this.handleResize.bind(this);
	}

	componentDidMount(){
		window.addEventListener('resize', this.handleResize);
		this.handleResize();
	}

	componentDidUpdate(){
		if (this.props.show.safename!==this.state.show){
			this.setState({
				page: 0,
				show: this.props.show.safename
			})
		}
	}

	handleResize(){
		let mobile = (window.outerWidth<767);

		if (mobile!==this.state.mobile) {
			this.setState({
				mobile: mobile
			});
		}
	}

	handleArrowClick(v){
		let p = this.state.page + v;
		const m = Math.ceil( this.props.data.episodes.length/3 );

		if (p<0) p = m-1;
		if (p>m-1) p = 0;

		this.setState({
			direction: (v>0) ? "forward" : "backward",
			page: p
	 	});
	}

	render(){
		let eps = _.find (this.props.data.episodes, (item)=>item.id );
		let visible = (this.props.data.category==='movie'||eps) ? " hide" : "";


		return(
			<div className={"episodes"}>
				<h3>EPISODES</h3>
				{ this.createEpisodeList() }
			</div>
		);
	}

	createEpisodeList(){
		if (!this.state.mobile) {
			let arrowStyle = {
				display: (this.props.menu) ? "none" : "block"
			}

			return (
				<div className="rowContainer">
					<div className={"row "+this.state.direction}>
						<ReactCSSTransitionGroup transitionName="slider" transitionEnterTimeout={500} transitionLeaveTimeout={500} >
							<div key={"slidepage"+this.state.page} className="page">
								{ this.createEpisode( this.state.page*3 ) }
								{ this.createEpisode( this.state.page*3+1 ) }
								{ this.createEpisode( this.state.page*3+2 ) }
							</div>
						</ReactCSSTransitionGroup>
					</div>
					<div className='arrowbtn next' onClick={ () => this.handleArrowClick(1) } style={arrowStyle}></div>
					<div className='arrowbtn prev' onClick={ () => this.handleArrowClick(-1) } style={arrowStyle}></div>
				</div>
			)
		} else {
			return (
				<div className="rowContainer">
					<div className="row">
						<div className="page">
							{ this.createAllEpisodes() }
						</div>
					</div>
				</div>
			)

		}
	}

	createAllEpisodes(){
		return this.props.data.episodes.map( (data,key)=>{
			return this.createEpisode(key);
		})
	}

	createEpisode(id){
		const data = this.props.data.episodes[id];
		if (!data) return null;
		return (
			<EpisodeItem data={data} show={this.props.show} key={"episode"+id} guild={this.props.guild} />
		)
	}
};

function mapStateToProps(state) {
	return {
		menu: state.menu
	};
}

export default connect(mapStateToProps)(EpisodeList);

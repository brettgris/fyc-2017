import React, {Component} from 'react';
import $ from 'jquery';

class VideoCode extends Component{
	constructor(props){
		super(props);

		this.state = {
			vid: null
		}
		this.videoReady = this.videoReady.bind(this);
	}

	componentDidMount(){
		this.videoReady();
	}

	componentDidUpdate(){
		this.videoReady();
	}

	renderHTML(id){
		var s = '<object id="myExperience4759047999001" class="BrightcoveExperience">';
			s+=	'<param name="bgcolor" value="#000000" />';
			s+=	'<param name="width" value="100%" />';
			s+=	'<param name="height" value="100%" />';
			s+=	'<param name="playerID" value="3336114681001" />';
			s+=	'<param name="playerKey" value="AQ~~,AAAAAEaigsI~,YF3XTVmQgAsL3z8opj3WpvvLsf9qzBEE" />';
			s+=	'<param name="isVid" value="true" />';
			s+=	'<param name="isUI" value="true" />';
			s+=	'<param name="dynamicStreaming" value="true" />';

			s+=	'<param name="@videoPlayer" value='+id+' />';
			s+=	'</object>';

			return s;
	}

	videoReady(){
		if (this.props.vid && this.props.vid!=this.state.vid) {
			$('.video-code').html( this.renderHTML(this.props.vid) );
			brightcove.createExperiences();

			$('.video-code object').height('100%');

			this.setState({
				vid: this.props.vid
			});

		}

	}

	render(){
		return(
			<div className="video-wrapper">
				<div className="video-code"></div>
			</div>
		);
	}
};

export default VideoCode;

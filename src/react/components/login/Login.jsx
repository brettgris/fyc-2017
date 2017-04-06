import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setEpisode} from '../../actions/actions.jsx';
import {Link} from 'react-router';

class Login extends Component{
	constructor(props){
		super(props);

		this.state = {
			error: false,
			password: ""
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(evt){
		this.setState({
			password: evt.target.value,
			error: false
		});
	}

	handleSubmit(evt){
		evt.preventDefault();
		let obj = this.props.episode;
		obj.a[this.props.guild] = this.state.password;
		this.props.setEpisode(obj);
	}

	render(){
		if (!this.props.login.visible) return null;

		var error = (this.props.login.error) ? " has-feedback has-error" : "";
		var markvisible = (this.props.login.error) ? "" : " hide"

		return (
			<div className="login">
				<div className="container">
					<div className="loginrow">
						<div className="col-sm-4 col-sm-offset-4">
							<form onSubmit={this.handleSubmit}>
  								<div className={"form-group form-group-lg"+error}>
  									<label className="control-label" htmlFor="sitepassword">Login</label>
  									<input type="text" className="form-control" id="sitepassword" placeholder="Enter Password" onChange={this.handleChange} value={this.state.password} aria-describedby="inputError2Status" />
  									<span className={"glyphicon glyphicon-remove form-control-feedback"+markvisible} aria-hidden="true"></span>
  									<span id="inputError2Status" className="sr-only">(error)</span>

  								</div>
  								<div className="form-group form-group-lg">
  									<button type="button" className="btn btn-default" onClick={this.handleSubmit}>SUBMIT</button>
  								</div>

  							</form>

							<p>
  								<Link to={`/${this.props.guild}/${this.props.show.safename}`}>Cancel</Link>
  							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
};

function mapStateToProps(state) {
	return {
		episode: state.episode || null,
		login: state.login
	};
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		setEpisode: setEpisode
	}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);

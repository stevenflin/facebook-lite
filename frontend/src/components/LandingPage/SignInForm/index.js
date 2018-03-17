import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux'

// components
import SignInFormPresentation from './SignInFormPresentation';

// redux
import { logIn, checkIfUsernameExists } from '../../../redux/asyncActions';

class SignInForm extends Component {

	constructor(props) {
    super(props);
    this.state = {
    	username: '',
    	password: '',
    };
  };

  onUsernameChange = (e,username) => this.setState({username});

  onPasswordChange = (e,password) => this.setState({password});

  isUsernameEmpty = () => this.state.username === '';

  isPasswordEmpty = () => this.state.password === '';

  logIn = () => {
  	let { username, password } = this.state;
  	let { checkIfUsernameExists, logIn, history } = this.props;

  	if(username === '') history.push({
			pathname: '/login',
			state: {
				error: 'username', 
				message: 'Username doesn\'t match any account.',
				username,
			},
		});

  	checkIfUsernameExists(username)
  	.then(resp => resp.json())
  	.then(resp => {
  		if(resp.success) {
  			if(!resp.exists) history.push({
  				pathname: '/login',
  				state: {
  					error: 'username', 
  					message: 'Username doesn\'t match any account.',
  					username,
  				},
  			});
  			else {
  				logIn(username, password)
			  	.then(resp => resp.json())
			  	.then(resp => {
			  		if(resp.success) history.push(`/newsfeed/${resp.body._id}`);
			  		else history.push({
			  			pathname: '/login',
			  			state: {
			  				error: 'password', 
			  				message: 'Incorrect password.',
			  				username,
			  				password,
			  			},
			  		});
			  	});
  			}
  		};
	  });
  };

	render() {
		return (
			<SignInFormPresentation 
				onUsernameChange={this.onUsernameChange}
				onPasswordChange={this.onPasswordChange}
				isUsernameEmpty={this.isUsernameEmpty}
				isPasswordEmpty={this.isPasswordEmpty}
				logIn={this.logIn}
			/>
			);
	};
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
	checkIfUsernameExists: (username) => dispatch(checkIfUsernameExists(username)),
  logIn: (username, password) => dispatch(logIn(username, password)),
});

SignInForm = connect(mapStateToProps, mapDispatchToProps)(SignInForm);

SignInForm = withRouter(SignInForm);

export default SignInForm;
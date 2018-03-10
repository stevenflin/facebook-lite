import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { withRouter } from 'react-router';
import { connect } from 'react-redux'

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import { logIn } from '../../../redux/asyncActions';

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
  	this.props.logIn(this.state.username, this.state.password)
  	.then(resp => resp.json())
  	.then(resp => {
  		if(resp.success) this.props.history.push('/newsfeed');
  	});
  };

	render() {
		return (
			<Col md={5} className='sign-in-form'>	
				<TextField
					className='sign-in-form-field'      
					type='text'
					onChange={this.onUsernameChange}
		      floatingLabelText='Username'
		      floatingLabelFocusStyle={{color: '#4885ed'}}
		      floatingLabelStyle={{color:(this.isUsernameEmpty()) ? 'rgba(0, 0, 0, 0.3)' : '#4885ed'}}
		      underlineFocusStyle={{borderColor: '#3cba54'}}
		      underlineStyle={{borderColor:(this.isUsernameEmpty()) ? 'rgba(0, 0, 0, 0.3)' : '#3cba54'}}
		      inputStyle={{fontSize:'small'}}
		      style={{width: '30%'}}
		    />
				<TextField
					className='sign-in-form-field'
					type='password'
					onChange={this.onPasswordChange}
		      floatingLabelText='Password'
		      floatingLabelFocusStyle={{color: '#db3236'}}
		      floatingLabelStyle={{color:(this.isPasswordEmpty()) ? 'rgba(0, 0, 0, 0.3)' : '#db3236'}}
		      underlineFocusStyle={{borderColor: '#f4c20d'}}
		      underlineStyle={{borderColor:(this.isPasswordEmpty()) ? 'rgba(0, 0, 0, 0.3)' : '#f4c20d'}}
		      inputStyle={{fontSize:'small'}}
		      style={{width: '30%'}}
		    />
				<RaisedButton 
					label='Log In'
					onClick={this.logIn}
					backgroundColor='#4285f4'
					labelColor='white'
					style={{height:27}}
		    />
			</Col>
			);
	};
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  logIn: (username, password) => dispatch(logIn(username, password)),
});

SignInForm = connect(mapStateToProps, mapDispatchToProps)(SignInForm);

SignInForm = withRouter(SignInForm);

export default SignInForm;
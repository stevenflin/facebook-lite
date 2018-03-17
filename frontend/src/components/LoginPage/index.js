import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { withRouter } from 'react-router';
import { connect } from 'react-redux'

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import Header from '../Reusable/Header';
import Logo from '../Reusable/Logo';

import { logIn } from '../../redux/asyncActions';

import '../../css/Login.css';

class LoginPage extends Component {
	constructor(props) {
		super(props);

		var params = props.location.state;

    this.state = {
    	username: (params && params.username) ? params.username : '',
    	password: '',
    	error: (params) ? params : 'none',
    };
  };

 	onUsernameChange = (e,username) => this.setState({username, error: 'none'});

  onPasswordChange = (e,password) => this.setState({password, error: 'none'});

  isUsernameEmpty = () => this.state.username === '';

  isPasswordEmpty = () => this.state.password === '';

  logIn = () => {

  	if(this.state.username === '') return this.props.history.push({
			pathname: '/login',
			state: {
				error: 'username', 
				message: 'Username doesn\'t match any account.',
				username: this.state.username,
			},
		});

  	this.props.logIn(this.state.username, this.state.password);
  };

  goToLandingPage = () => this.props.history.push('/');

	render() {
		let params = this.state.error;
		return (
				<div>
					<Header>
						<Logo />
					</Header>
					<Col md={6} className='hc'>
						<div className='login-form'>
							<Row><h5 className='hc'>Log into Facebook-lite</h5></Row>
						  <Row>
								<TextField
									className='hc'      
									type='text'
									value={this.state.username}
									onChange={this.onUsernameChange}
									errorText={(params.error === 'username') ? params.message : ''}
						      floatingLabelText='Username'
						      floatingLabelFocusStyle={{color: (params.error === 'username') ? 'rgb(244, 67, 54)' : '#4885ed'}}
						      floatingLabelStyle={{color:(this.isUsernameEmpty()) ? 'rgba(0, 0, 0, 0.3)' : '#4885ed'}}
						      underlineFocusStyle={{borderColor: '#4885ed'}}
						      underlineStyle={{borderColor:(this.isUsernameEmpty()) ? 'rgba(0, 0, 0, 0.3)' : '#4885ed'}}
						      style={{width: '50%'}}
						    />
						  </Row>
						  <Row>
								<TextField
									className='hc'      
									type='password'
									value={this.state.password}
									onChange={this.onPasswordChange}
									errorText={(params.error === 'password') ? params.message : ''}
						      floatingLabelText='Password'
						      floatingLabelFocusStyle={{color: (params.error === 'password') ? 'rgb(244, 67, 54)' : '#4885ed'}}
						      floatingLabelStyle={{color:(this.isPasswordEmpty()) ? 'rgba(0, 0, 0, 0.3)' : '#4885ed'}}
						      underlineFocusStyle={{borderColor: '#4885ed'}}
						      underlineStyle={{borderColor:(this.isPasswordEmpty()) ? 'rgba(0, 0, 0, 0.3)' : '#4885ed'}}
						      style={{width: '50%'}}
						    />
						  </Row>
						  <br/>
						  <Row>
						  	<RaisedButton 
						  		className='hc' 
									label='Log In' 
									onClick={this.logIn}
									backgroundColor='#4285f4'
									labelColor='white'
									style={{height:50, width:'50%'}}
						    />
						  </Row>
						  <br/>
						  <Row>
							  <div className='login-form-break hc'>
								  <span className='login-form-break-text fss ph10'>
								    or
								  </span>
								</div>
							</Row>
							<br/>
							<Row>
						  	<RaisedButton 
						  		className='hc' 
									label='Create New Account' 
									onClick={this.goToLandingPage}
									backgroundColor='#3cba54'
									labelColor='white'
									style={{height:50, width:'50%'}}
						    />
						  </Row>
						</div>
					</Col>
				</div>
			);
	};
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  logIn: (username, password) => dispatch(logIn(username, password)),
});

LoginPage = connect(mapStateToProps, mapDispatchToProps)(LoginPage);

LoginPage = withRouter(LoginPage);

export default LoginPage;
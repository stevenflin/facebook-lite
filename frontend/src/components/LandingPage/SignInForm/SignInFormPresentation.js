import React from 'react';
import { Col } from 'react-bootstrap';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const SignInFormPresentation = ({
	onUsernameChange, 
	onPasswordChange, 
	isUsernameEmpty, 
	isPasswordEmpty, 
	logIn
}) => (
	<Col md={5}>
		<div id='sign-in-form'>	
			<TextField
				className='sign-in-form-field'      
				type='text'
				onChange={onUsernameChange}
	      floatingLabelText='Username'
	      floatingLabelFocusStyle={{color: '#4885ed'}}
	      floatingLabelStyle={{color:(isUsernameEmpty()) ? 'rgba(0, 0, 0, 0.3)' : '#4885ed'}}
	      underlineFocusStyle={{borderColor: '#3cba54'}}
	      underlineStyle={{borderColor:(isUsernameEmpty()) ? 'rgba(0, 0, 0, 0.3)' : '#3cba54'}}
	      inputStyle={{fontSize:'small'}}
	      style={{width: '30%'}}
	    />
			<TextField
				className='sign-in-form-field'
				type='password'
				onChange={onPasswordChange}
	      floatingLabelText='Password'
	      floatingLabelFocusStyle={{color: '#db3236'}}
	      floatingLabelStyle={{color:(isPasswordEmpty()) ? 'rgba(0, 0, 0, 0.3)' : '#db3236'}}
	      underlineFocusStyle={{borderColor: '#f4c20d'}}
	      underlineStyle={{borderColor:(isPasswordEmpty()) ? 'rgba(0, 0, 0, 0.3)' : '#f4c20d'}}
	      inputStyle={{fontSize:'small'}}
	      style={{width: '30%'}}
	    />
			<RaisedButton 
				label='Log In'
				onClick={logIn}
				backgroundColor='#4285f4'
				labelColor='white'
				style={{height:27}}
	    />
	  </div>
	</Col>
);

export default SignInFormPresentation;
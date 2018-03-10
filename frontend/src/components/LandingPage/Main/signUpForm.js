import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { withRouter } from 'react-router';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Popover from 'material-ui/Popover';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

class SignUpForm extends Component {
	constructor(props) {
    super(props);
    this.state = {
	    newUser: {
	    	firstName: '',
	    	lastName: '',
	    	username: '',
	    	password: '',
	    	month: 3,
	    	date: 18,
	    	year: 1996,
	    	gender: '',
	    },
    	open: false,
    	populateErrors: false,
    	isUsernameTaken: false,
    };
  };

  handleNewUserInputChange = (key,value) => {
  	let newUser = Object.assign({},this.state.newUser);
  	newUser[key] = value;
  	this.setState({newUser});
  };

  onFirstNameChange = (e,firstName) => this.handleNewUserInputChange('firstName', firstName);

  onLastNameChange = (e,lastName) => this.handleNewUserInputChange('lastName', lastName);

  onUsernameChange = (e,username) => {
  	this.setState({isUsernameTaken: false});
  	this.handleNewUserInputChange('username', username);
  };

  onPasswordChange = (e,password) => this.handleNewUserInputChange('password', password);

  handleMonthChange = (event, index, month) => this.handleNewUserInputChange('month', month);

  handleDateChange = (event, index, date) => this.handleNewUserInputChange('date', date);

  handleYearChange = (event, index, year) => this.handleNewUserInputChange('year', year);

  handleGenderChange = (event, gender) => this.handleNewUserInputChange('gender', gender);

  handleBdayTip = (event) => {
  	event.preventDefault();
  	this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => this.setState({open: false});

  isFirstNameEmpty = () => this.state.newUser.firstName === '';

  isLastNameEmpty = () => this.state.newUser.lastName === '';

  isUsernameEmpty = () => this.state.newUser.username === '';

  checkIfUsernameExists = () => {
  	fetch(process.env.REACT_APP_API_URL + `/users/usernames/${this.state.newUser.username}`, {
  		method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
  	})
  	.then(resp => resp.json())
  	.then(resp => {
  		if(resp.success) {
  			this.setState({isUsernameTaken: resp.exists});
  		};
  	});
  };

  isPasswordEmpty = () => this.state.newUser.password === '';

  isGenderEmpty = () => this.state.newUser.gender === '';

  saveUser = () => {
  	fetch(process.env.REACT_APP_API_URL + '/users/new', {
  		method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.newUser),
  	})
  	.then(resp => resp.json())
  	.then(resp => {
  		if(!resp.success) {
  			this.setState({populateErrors: true});
  		}
  		else
  		{
  			this.props.history.push('/newsfeed');
  		};
  	});
  };

	render() {
		var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
		var dates = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
		var years = [1991,1992,1993,1994,1995,1996];

		var maleButtonColor = (this.state.newUser.gender === 'male') ? '#4885ed' : 'gray'
		var femaleButtonColor = (this.state.newUser.gender === 'female') ? '#4885ed' : 'gray'

		maleButtonColor = (this.state.populateErrors && this.isGenderEmpty()) ? 'rgb(244, 67, 54)' : maleButtonColor;
		femaleButtonColor = (this.state.populateErrors && this.isGenderEmpty()) ? 'rgb(244, 67, 54)' : femaleButtonColor;

		var usernameErrorMessage = (this.state.isUsernameTaken) ? 'Username taken' : '';
		usernameErrorMessage = (this.state.populateErrors && this.isUsernameEmpty()) ? 'Field is required' : usernameErrorMessage;

		var usernameFloatingTextColor = 'rgba(0, 0, 0, 0.3)';
		if((this.state.populateErrors && this.isUsernameEmpty()) || this.state.isUsernameTaken)
			usernameFloatingTextColor = 'rgb(244, 67, 54)';
		else if(!this.isUsernameEmpty()) 
			usernameFloatingTextColor = '#4885ed';
		
		return (
				<Col md={5} className='sign-up-form'>
					<Row><h2>Sign Up</h2></Row>
					<Row><p className='reset-spacing' style={{fontSize:'larger'}}>It’s free and always will be.</p></Row>
					<Row>
						<TextField
							className='sign-up-form-field-half'      
							type='text'
							value={this.state.newUser.firstName}
							onChange={this.onFirstNameChange}
							errorText={(this.state.populateErrors && this.isFirstNameEmpty()) ? 'Field is required' : ''}
				      floatingLabelText='First Name'
				      floatingLabelFocusStyle={{color: (this.state.populateErrors && this.isFirstNameEmpty()) ? 'rgb(244, 67, 54)' : '#4885ed'}}
				      floatingLabelStyle={{color:(this.isFirstNameEmpty()) ? 'rgba(0, 0, 0, 0.3)' : '#4885ed'}}
				      underlineFocusStyle={{borderColor: '#4885ed'}}
				      underlineStyle={{borderColor:(this.isFirstNameEmpty()) ? 'rgba(0, 0, 0, 0.3)' : '#4885ed'}}
				      inputStyle={{fontSize:'small'}}
				      style={{width: '47.5%', marginRight: '5%'}}
				    />
						<TextField
							className='sign-up-form-field-half'
							type='text'
							value={this.state.newUser.lastName}
							onChange={this.onLastNameChange}
							errorText={(this.state.populateErrors && this.isLastNameEmpty()) ? 'Field is required' : ''}
				      floatingLabelText='Last Name'
				      floatingLabelFocusStyle={{color: (this.state.populateErrors && this.isLastNameEmpty()) ? 'rgb(244, 67, 54)' : '#4885ed'}}
				      floatingLabelStyle={{color:(this.isLastNameEmpty()) ? 'rgba(0, 0, 0, 0.3)' : '#4885ed'}}
				      underlineFocusStyle={{borderColor: '#4885ed'}}
				      underlineStyle={{borderColor:(this.isLastNameEmpty()) ? 'rgba(0, 0, 0, 0.3)' : '#4885ed'}}
				      inputStyle={{fontSize:'small'}}
				      style={{width: '47.5%'}}
				    />
				  </Row>
				  <Row>
						<TextField
							className='sign-up-form-field'      
							type='text'
							value={this.state.newUser.username}
							onChange={this.onUsernameChange}
							onBlur={this.checkIfUsernameExists}
							errorText={usernameErrorMessage}
				      floatingLabelText='Username'
				      floatingLabelFocusStyle={{color: ((this.state.populateErrors && this.isUsernameEmpty()) || this.state.isUsernameTaken) ? 'rgb(244, 67, 54)' : '#4885ed'}}
				      floatingLabelStyle={{color:usernameFloatingTextColor}}
				      underlineFocusStyle={{borderColor: '#4885ed'}}
				      underlineStyle={{borderColor:(this.isUsernameEmpty()) ? 'rgba(0, 0, 0, 0.3)' : '#4885ed'}}
				      inputStyle={{fontSize:'small'}}
				      style={{width: '100%'}}
				    />
				  </Row>
				  <Row>
						<TextField
							className='sign-up-form-field'      
							type='password'
							value={this.state.newUser.password}
							onChange={this.onPasswordChange}
							errorText={(this.state.populateErrors && this.isPasswordEmpty()) ? 'Field is required' : ''}
				      floatingLabelText='New Password'
				      floatingLabelFocusStyle={{color: (this.state.populateErrors && this.isPasswordEmpty()) ? 'rgb(244, 67, 54)' : '#4885ed'}}
				      floatingLabelStyle={{color:(this.isPasswordEmpty()) ? 'rgba(0, 0, 0, 0.3)' : '#4885ed'}}
				      underlineFocusStyle={{borderColor: '#4885ed'}}
				      underlineStyle={{borderColor:(this.isPasswordEmpty()) ? 'rgba(0, 0, 0, 0.3)' : '#4885ed'}}
				      inputStyle={{fontSize:'small'}}
				      style={{width: '100%'}}
				    />
				  </Row>
				  <br/>
				  <Row>
				  	<Col className='reset-spacing' md={4} style={{fontSize:'larger'}}>Birthday </Col>
				  	<Col md={6} style={{fontSize:'x-small'}}><a href='#' onClick={this.handleBdayTip}>Why do I need to provide my birthday?</a></Col>
				  	<Popover
		          open={this.state.open}
		          anchorEl={this.state.anchorEl}
		          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
		          targetOrigin={{horizontal: 'left', vertical: 'top'}}
		          onRequestClose={this.handleRequestClose}
		        >
		          <p style={{fontSize:'small',padding:'10px'}}>
		          	<strong>Providing your birthday</strong> helps make sure you <br/>
		          	get the right Facebook experience for your age. <br/>
		          	If you want to change who sees this, go to the <br/>
		          	About section of your profile. For more details, <br/>
		          	please visit our <a href='#'>Data Policy</a>.
		          </p>
		        </Popover>
				  </Row>
				  <Row>
				  	<div>
					  	<DropDownMenu style={{width:105,fontSize:'small'}} autoWidth={false} value={this.state.newUser.month} onChange={this.handleMonthChange}>
				        {months.map((month,index) => <MenuItem key={index} value={index+1} primaryText={month} />)}
				      </DropDownMenu>
				      <DropDownMenu style={{width:100,fontSize:'small'}} autoWidth={false} value={this.state.newUser.date} onChange={this.handleDateChange}>
				        {dates.map((date,index) => <MenuItem key={index} value={date} primaryText={date} />)}
				      </DropDownMenu>
				      <DropDownMenu style={{width:125,fontSize:'small'}} autoWidth={false} value={this.state.newUser.year} onChange={this.handleYearChange}>
				        {years.map((year,index) => <MenuItem key={index} value={year} primaryText={year} />)}
				      </DropDownMenu>
			      </div>
				  </Row>
				  <Row>
					  <RadioButtonGroup style={{display:'flex'}} name='gender-picker' onChange={this.handleGenderChange}>
				      <RadioButton
				        value='male'
				        label='Male'
				        style={{width:'auto',marginRight:'2vw'}}
	 			        iconStyle={{fill:maleButtonColor}}
				      />
				      <RadioButton
				        value='female'
				        label='Female'
				        style={{width:'auto',marginRight:'2vw'}}
								iconStyle={{fill:femaleButtonColor}}
				      />
				    </RadioButtonGroup>
				    {(this.state.populateErrors && this.isGenderEmpty()) ? <p style={{fontSize:'x-small',color:'rgb(244, 67, 54)'}}> *Field is required</p> : null}
				  </Row>
				  <Row>
				  	<p style={{fontSize:'xx-small'}}>
				  		By clicking Create Account, you agree to our <a href='#'>Terms</a> and that <br/>
				  		you have read our <a href='#'>Data Policy</a>, including our <a href='#'>Cookie Use</a>. You <br/>
				  		may receive SMS Notifications from Facebook and can opt out <br/>
				  		at any time.
				  	</p>
				  </Row>
				  <Row>
				  	<RaisedButton 
							label='Create Account' 
							onClick={this.saveUser}
							backgroundColor='#4285f4'
							labelColor='white'
							style={{height:50}}
				    />
				  </Row>
				</Col>
			);
	};
};

SignUpForm = withRouter(SignUpForm);

export default SignUpForm;
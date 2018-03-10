import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { withRouter } from 'react-router';
import { connect } from 'react-redux'

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Popover from 'material-ui/Popover';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

import { checkIfUsernameExists, saveUser } from '../../../redux/asyncActions';

let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
let dates = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
let years = [1991,1992,1993,1994,1995,1996];

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
  	let username = this.state.newUser.username;
  	if(username !== '') {
  		this.props.checkIfUsernameExists(username)
	  	.then(resp => resp.json())
	  	.then(resp => {
	  		if(resp.success) {
	  			this.setState({isUsernameTaken: resp.exists});
	  		};
	  	});
	  }
  };

  isPasswordEmpty = () => this.state.newUser.password === '';

  isGenderEmpty = () => this.state.newUser.gender === '';

  saveUser = () => {
  	this.props.saveUser(this.state.newUser)
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

		var maleButtonColor = (this.state.newUser.gender === 'male') ? '#4885ed' : 'gray'
		var femaleButtonColor = (this.state.newUser.gender === 'female') ? '#4885ed' : 'gray'

		maleButtonColor = (this.state.populateErrors && this.isGenderEmpty()) ? 'rgb(244, 67, 54)' : maleButtonColor;
		femaleButtonColor = (this.state.populateErrors && this.isGenderEmpty()) ? 'rgb(244, 67, 54)' : femaleButtonColor;

		var usernameErrorMessage = (this.state.isUsernameTaken) ? 'Username taken' : '';
		usernameErrorMessage = (this.state.populateErrors && this.isUsernameEmpty()) ? 'Field is required' : usernameErrorMessage;
		
		return (
			<div className='sign-up-form'>
				<Row><h2>Sign Up</h2></Row>
				<Row><p className='reset-spacing fsl'>It’s free and always will be.</p></Row>
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
			      floatingLabelStyle={{color:(this.isUsernameEmpty()) ? 'rgba(0, 0, 0, 0.3)' : '#4885ed'}}
			      floatingLabelShrinkStyle={{color:((this.state.populateErrors && this.isUsernameEmpty()) || this.state.isUsernameTaken) ? 'rgb(244, 67, 54)' : '#4885ed'}}
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
			  	<Col className='reset-spacing fsl' md={4}>Birthday </Col>
			  	<Col className='fsxs' md={6}>
			  		<a href='#' onClick={this.handleBdayTip}>Why do I need to provide my birthday?</a>
			  	</Col>
			  	<Popover
	          open={this.state.open}
	          anchorEl={this.state.anchorEl}
	          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
	          targetOrigin={{horizontal: 'left', vertical: 'top'}}
	          onRequestClose={this.handleRequestClose}
	        >
	          <p className='fss p10'>
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
				  	<DropDownMenu 
				  		style={{width:105,fontSize:'small'}} 
				  		autoWidth={false} 
				  		value={this.state.newUser.month}
				  		 onChange={this.handleMonthChange}
				  		>
			        {months.map((month,index) => <MenuItem key={index} value={index+1} primaryText={month} />)}
			      </DropDownMenu>
			      <DropDownMenu 
			      	style={{width:100,fontSize:'small'}} 
			      	autoWidth={false} 
			      	value={this.state.newUser.date} 
			      	onChange={this.handleDateChange}
			      >
			        {dates.map((date,index) => <MenuItem key={index} value={date} primaryText={date} />)}
			      </DropDownMenu>
			      <DropDownMenu 
			      	style={{width:125,fontSize:'small'}} 
			      	autoWidth={false} 
			      	value={this.state.newUser.year} 
			      	onChange={this.handleYearChange}
			      >
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
			    {(this.state.populateErrors && this.isGenderEmpty()) 
			    	? <p className='fsxs input-error'> *Field is required</p> 
			    	: null
			    }
			  </Row>
			  <Row>
			  	<p className='fsxs'>
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
			</div>
			);
	};
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkIfUsernameExists: (username) => dispatch(checkIfUsernameExists(username)),
    saveUser: (user) => dispatch(saveUser(user)),
  };
};

SignUpForm = connect(mapStateToProps, mapDispatchToProps)(SignUpForm);

SignUpForm = withRouter(SignUpForm);

export default SignUpForm;
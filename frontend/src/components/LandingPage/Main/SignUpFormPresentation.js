import React from 'react';
import { Row, Col } from 'react-bootstrap';

// material ui
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Popover from 'material-ui/Popover';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';


const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const dates = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
const years = [1991,1992,1993,1994,1995,1996];

const SignUpFormPresentation = ({
	newUser,
	populateErrors,
	isUsernameTaken,
	open,
	anchorEl,
	onFirstNameChange,
	onLastNameChange,
	onUsernameChange,
	onPasswordChange,
	handleMonthChange,
	handleDateChange,
	handleYearChange,
	handleBdayTip,
	handleRequestClose,
	handleGenderChange,
	isFirstNameEmpty,
	isLastNameEmpty,
	isUsernameEmpty,
	isPasswordEmpty,
	isGenderEmpty,
	saveUser,
	checkIfUsernameExists,
}) => {
	var maleButtonColor = (newUser.gender === 'male') ? '#4885ed' : 'gray'
	var femaleButtonColor = (newUser.gender === 'female') ? '#4885ed' : 'gray'

	maleButtonColor = (populateErrors && isGenderEmpty()) ? 'rgb(244, 67, 54)' : maleButtonColor;
	femaleButtonColor = (populateErrors && isGenderEmpty()) ? 'rgb(244, 67, 54)' : femaleButtonColor;

	var usernameErrorMessage = (isUsernameTaken) ? 'Username taken' : '';
	usernameErrorMessage = (populateErrors && isUsernameEmpty()) ? 'Field is required' : usernameErrorMessage;
	
	return (
		<div className='sign-up-form'>
			<Row><h2>Sign Up</h2></Row>
			<Row><p className='reset-spacing fsl'>It’s free and always will be.</p></Row>
			<Row>
				<TextField
					className='sign-up-form-field-half'      
					type='text'
					value={newUser.firstName}
					onChange={onFirstNameChange}
					errorText={(populateErrors && isFirstNameEmpty()) ? 'Field is required' : ''}
		      floatingLabelText='First Name'
		      floatingLabelFocusStyle={{color: (populateErrors && isFirstNameEmpty()) ? 'rgb(244, 67, 54)' : '#4885ed'}}
		      floatingLabelStyle={{color:(isFirstNameEmpty()) ? 'rgba(0, 0, 0, 0.3)' : '#4885ed'}}
		      underlineFocusStyle={{borderColor: '#4885ed'}}
		      underlineStyle={{borderColor:(isFirstNameEmpty()) ? 'rgba(0, 0, 0, 0.3)' : '#4885ed'}}
		      inputStyle={{fontSize:'small'}}
		      style={{width: '47.5%', marginRight: '5%'}}
		    />
				<TextField
					className='sign-up-form-field-half'
					type='text'
					value={newUser.lastName}
					onChange={onLastNameChange}
					errorText={(populateErrors && isLastNameEmpty()) ? 'Field is required' : ''}
		      floatingLabelText='Last Name'
		      floatingLabelFocusStyle={{color: (populateErrors && isLastNameEmpty()) ? 'rgb(244, 67, 54)' : '#4885ed'}}
		      floatingLabelStyle={{color:(isLastNameEmpty()) ? 'rgba(0, 0, 0, 0.3)' : '#4885ed'}}
		      underlineFocusStyle={{borderColor: '#4885ed'}}
		      underlineStyle={{borderColor:(isLastNameEmpty()) ? 'rgba(0, 0, 0, 0.3)' : '#4885ed'}}
		      inputStyle={{fontSize:'small'}}
		      style={{width: '47.5%'}}
		    />
		  </Row>
		  <Row>
				<TextField
					className='sign-up-form-field'      
					type='text'
					value={newUser.username}
					onChange={onUsernameChange}
					onBlur={checkIfUsernameExists}
					errorText={usernameErrorMessage}
		      floatingLabelText='Username'
		      floatingLabelStyle={{color:(isUsernameEmpty()) ? 'rgba(0, 0, 0, 0.3)' : '#4885ed'}}
		      floatingLabelShrinkStyle={{color:((populateErrors && isUsernameEmpty()) || isUsernameTaken) ? 'rgb(244, 67, 54)' : '#4885ed'}}
		      underlineFocusStyle={{borderColor: '#4885ed'}}
		      underlineStyle={{borderColor:(isUsernameEmpty()) ? 'rgba(0, 0, 0, 0.3)' : '#4885ed'}}
		      inputStyle={{fontSize:'small'}}
		      style={{width: '100%'}}
		    />
		  </Row>
		  <Row>
				<TextField
					className='sign-up-form-field'      
					type='password'
					value={newUser.password}
					onChange={onPasswordChange}
					errorText={(populateErrors && isPasswordEmpty()) ? 'Field is required' : ''}
		      floatingLabelText='New Password'
		      floatingLabelFocusStyle={{color: (populateErrors && isPasswordEmpty()) ? 'rgb(244, 67, 54)' : '#4885ed'}}
		      floatingLabelStyle={{color:(isPasswordEmpty()) ? 'rgba(0, 0, 0, 0.3)' : '#4885ed'}}
		      underlineFocusStyle={{borderColor: '#4885ed'}}
		      underlineStyle={{borderColor:(isPasswordEmpty()) ? 'rgba(0, 0, 0, 0.3)' : '#4885ed'}}
		      inputStyle={{fontSize:'small'}}
		      style={{width: '100%'}}
		    />
		  </Row>
		  <br/>
		  <Row>
		  	<Col className='reset-spacing fsl' md={4}>Birthday </Col>
		  	<Col className='fsxs' md={6}>
		  		<a href='/#' onClick={handleBdayTip}>Why do I need to provide my birthday?</a>
		  	</Col>
		  	<Popover
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={handleRequestClose}
        >
          <p className='fss p10'>
          	<strong>Providing your birthday</strong> helps make sure you <br/>
          	get the right Facebook experience for your age. <br/>
          	If you want to change who sees this, go to the <br/>
          	About section of your profile. For more details, <br/>
          	please visit our <a href='/#'>Data Policy</a>.
          </p>
        </Popover>
		  </Row>
		  <Row>
		  	<div>
			  	<DropDownMenu 
			  		style={{width:105,fontSize:'small'}} 
			  		autoWidth={false} 
			  		value={newUser.month}
			  		 onChange={handleMonthChange}
			  		>
		        {months.map((month,index) => <MenuItem key={index} value={index+1} primaryText={month} />)}
		      </DropDownMenu>
		      <DropDownMenu 
		      	style={{width:100,fontSize:'small'}} 
		      	autoWidth={false} 
		      	value={newUser.date} 
		      	onChange={handleDateChange}
		      >
		        {dates.map((date,index) => <MenuItem key={index} value={date} primaryText={date} />)}
		      </DropDownMenu>
		      <DropDownMenu 
		      	style={{width:125,fontSize:'small'}} 
		      	autoWidth={false} 
		      	value={newUser.year} 
		      	onChange={handleYearChange}
		      >
		        {years.map((year,index) => <MenuItem key={index} value={year} primaryText={year} />)}
		      </DropDownMenu>
	      </div>
		  </Row>
		  <Row>
			  <RadioButtonGroup style={{display:'flex'}} name='gender-picker' onChange={handleGenderChange}>
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
		    {(populateErrors && isGenderEmpty()) 
		    	? <p className='fsxs input-error'> *Field is required</p> 
		    	: null
		    }
		  </Row>
		  <Row>
		  	<p className='fsxs'>
		  		By clicking Create Account, you agree to our <a href='/#'>Terms</a> and that <br/>
		  		you have read our <a href='/#'>Data Policy</a>, including our <a href='/#'>Cookie Use</a>. You <br/>
		  		may receive SMS Notifications from Facebook and can opt out <br/>
		  		at any time.
		  	</p>
		  </Row>
		  <Row>
		  	<RaisedButton 
					label='Create Account' 
					onClick={saveUser}
					backgroundColor='#4285f4'
					labelColor='white'
					style={{height:50}}
		    />
		  </Row>
		</div>
		);
};

export default SignUpFormPresentation;
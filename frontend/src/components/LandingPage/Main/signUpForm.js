import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux'

// components
import SignUpFormPresentation from './SignUpFormPresentation';

// redux
import { checkIfUsernameExists, saveUser } from '../../../redux/asyncActions';

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
		return <SignUpFormPresentation 
			newUser={this.state.newUser}
			populateErrors={this.state.populateErrors}
			isUsernameTaken={this.state.isUsernameTaken}
			open={this.state.open}
			anchorEl={this.state.anchorEl}
			onFirstNameChange={this.onFirstNameChange}
			onLastNameChange={this.onLastNameChange}
			onUsernameChange={this.onUsernameChange}
			onPasswordChange={this.onPasswordChange}
			handleMonthChange={this.handleMonthChange}
			handleDateChange={this.handleDateChange}
			handleYearChange={this.handleYearChange}
			handleBdayTip={this.handleBdayTip}
			handleRequestClose={this.handleRequestClose}
			handleGenderChange={this.handleGenderChange}
			isFirstNameEmpty={this.isFirstNameEmpty}
			isLastNameEmpty={this.isLastNameEmpty}
			isUsernameEmpty={this.isUsernameEmpty}
			isPasswordEmpty={this.isPasswordEmpty}
			isGenderEmpty={this.isGenderEmpty}
			saveUser={this.saveUser}
			checkIfUsernameExists={this.checkIfUsernameExists}
		/>
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
import React, { Component } from 'react';

import SignInForm from './SignInForm/index';
import Main from './Main/index';
import Header from '../Reusable/Header';
import Logo from '../Reusable/Logo';

import '../../css/LandingPage.css';

const LandingPage = () => (
	<div>
  	<Header>
  		<Logo />
  		<SignInForm />
  	</Header>
  	<Main />
	</div>
);

export default LandingPage;
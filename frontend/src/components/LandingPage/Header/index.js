import React, { Component } from 'react';
import { Row } from 'react-bootstrap';

import SignInForm from './signInForm';
import Logo from '../../Reusable/Logo';

export default class Header extends Component {
	render() {
		return (
			<Row className='header'>
				<Logo />
				<SignInForm />
			</Row>
			);
	};
};
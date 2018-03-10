import React, { Component } from 'react';
import { Row } from 'react-bootstrap';

import SignInForm from './signInForm';
import Logo from '../../Reusable/Logo';

export default class Header extends Component {
	render() {
		return (
			<div className='header'>
				<Row>
					<Logo />
					<SignInForm />
				</Row>
			</div>
			);
	};
};
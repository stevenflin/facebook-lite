import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import SignUpForm from './SignUpForm';
import WelcomeText from './WelcomeText';

export default class Main extends Component {
	render() {
		return (
			<div className='main'>
				<Row>
					<Col md={7}>
						<WelcomeText />
					</Col>
					<Col md={5}>
						<SignUpForm />
					</Col>
				</Row>
			</div>
			);
	};
};
import React from 'react';
import { Row, Col } from 'react-bootstrap';

import SignUpForm from './SignUpForm';
import WelcomeText from './WelcomeText';

const Main = () => (
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

export default Main;
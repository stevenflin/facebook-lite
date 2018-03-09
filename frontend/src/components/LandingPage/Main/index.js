import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import ChromeReaderMode from 'material-ui-icons/ChromeReaderMode';
import ImportantDevices from 'material-ui-icons/ImportantDevices';
import FindReplace from 'material-ui-icons/FindReplace';

import SignUpForm from './signUpForm';

export default class Main extends Component {
	render() {
		return (
			<Row className='main'>
				<WelcomeText />
				<SignUpForm />
			</Row>
			);
	};
};

class WelcomeText extends Component {
	render() {
		return (
				<Col md={7} className='welcome-text'>
					<h3>
						Connect with friends and the
						<br/>
						world around you on Facebook.
					</h3>
					<br/><br/>
					<div>
						<span><ChromeReaderMode className='main-icon'/></span>
						<strong>See <span style={{color:'#4885ed'}}>photos</span> and <span style={{color:'#3cba54'}}>updates</span> </strong>
						from friends in News Feed.
					</div>
					<br/><br/>
					<div>
						<span><ImportantDevices className='main-icon'/></span>
						<strong>Share what's <span style={{color:'#db3236'}}>new</span> </strong>
						in your life on your Timeline.
					</div>
					<br/><br/>
					<div>
						<span><FindReplace className='main-icon'/></span>
						<strong>Find <span style={{color:'#f4c20d'}}>more</span> </strong>
						of what you're looking for with Facebook Search.
					</div>
					<br/><br/>
				</Col>
			);
	};
};
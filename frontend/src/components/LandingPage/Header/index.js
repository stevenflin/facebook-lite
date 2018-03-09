import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import SignInForm from './signInForm';

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

class Logo extends Component {
	render() {
		return (
			<Col md={7}>
				<h2 className='logo reset-spacing'>
					<span style={{color:'#4885ed'}}>f</span>
					<span style={{color:'#db3236'}}>a</span>
					<span style={{color:'#f4c20d'}}>c</span>
					<span style={{color:'#4885ed'}}>e</span>
					<span style={{color:'#3cba54'}}>b</span>
					<span style={{color:'#db3236'}}>o</span>
					<span style={{color:'#4885ed'}}>o</span>
					<span style={{color:'#f4c20d'}}>k</span>
					<span style={{color:'#'}}>-</span>
					<span style={{color:'#4885ed'}}>L</span>
					<span style={{color:'#4885ed'}}>I</span>
					<span style={{color:'#4885ed'}}>T</span>
					<span style={{color:'#4885ed'}}>E</span>
				</h2>
			</Col>
			);
	};
};
import React, { Component } from 'react';
import { Row } from 'react-bootstrap';

const Header = (props) => (
	<div className='header'>
		<Row>
			{props.children}
		</Row>
	</div>
);

export default Header;
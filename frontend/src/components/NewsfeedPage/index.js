import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import NavBar from './NavBar';
import SideBar from './SideBar';
import Newsfeed from './Newsfeed/index';
import FriendsList from './FriendsList';

import '../../css/NewsfeedPage.css';

export default class NewsfeedPage extends Component {
  render() {
    return <NewsfeedPagePresentation />;
  };
};

class NewsfeedPagePresentation extends Component {
  render() {
	  return (
	  	<div>
	  		<NavBar />
	  		<div className='newsfeed-main p20'>
		  		<Row>
		  			<Col md={2}>
		  				<SideBar />
		  			</Col>
		  			<Col md={5}>
		  				<Newsfeed />
		  			</Col>
		  		</Row>
		  	</div>
	  		<FriendsList />
	  	</div>
	  	);
	};
};
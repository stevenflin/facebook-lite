import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import Drawer from 'material-ui/Drawer';

import NavBar from './NavBar';
import SideBar from './SideBar';
import Newsfeed from './Newsfeed/index';

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
	  		<div className='newsfeed-main p10'>
		  		<Row>
		  			<Col md={2}>
		  				<SideBar />
		  			</Col>
		  			<Col md={5}>
		  				<Newsfeed />
		  			</Col>
		  		</Row>
		  	</div>
	  		<Drawer 
					open={true} 
					openSecondary={true} 
					width={200} 
					containerStyle={{height: '89.55vh', top: '10.45vh', boxShadow: 'none', borderLeft: '1px solid #d3d3d3'}}
				>
        </Drawer>
	  	</div>
	  	);
	};
};
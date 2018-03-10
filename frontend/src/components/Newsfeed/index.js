import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import Drawer from 'material-ui/Drawer';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

import ChatBubbleOutline from 'material-ui-icons/ChatBubbleOutline';
import FavoriteBorder from 'material-ui-icons/FavoriteBorder';

import NavBar from './NavBar';
import SideBar from './SideBar';

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
	  		<Row className='newsfeed-main'>
	  			<Col md={2}>
	  				<SideBar />
	  			</Col>
	  			<Col md={7}>
	  				<Newsfeed />
	  			</Col>
	  		</Row>
	  		<Drawer 
					open={true} 
					openSecondary={true} 
					width={200} 
					containerStyle={{height: '89.55vh', top: '10.45vh', boxShadow: 'none', borderLeft: '1px solid #d3d3d3'}}>

        </Drawer>
	  	</div>
	  	);
	};
};

class Newsfeed extends Component {
	render() {
		return (
			<div>
				<NewsfeedNewPost />
				<br/>
				<NewsfeedPost />
				<br />
				<NewsfeedPost />
			</div>
			);
	};
};

class NewsfeedNewPost extends Component {
	render() {
		return (
			<div>
				<Paper zDepth={1} className='newsfeed-post-new'>
					<TextField
						type='text'
						onChange={() => {}}
			      floatingLabelText={'What\'s on your mind, Steven?'}
			      inputStyle={{fontSize:'small'}}
			      style={{width: '100%'}}
			    />
				</Paper>
			</div>
			);
	};
};

class NewsfeedPost extends Component {
	render() {
		return (
			<div>
				<Paper zDepth={1} className='newsfeed-post'>
					<a href='#'>Steven Lin</a>
					<p className='fss'>March 18</p>
					<p>First post!!!!</p>
					<hr/>
					<Row className='reset-spacing'>
						<Col md={6} className='text-align-center'>
							<FavoriteBorder style={{transform: 'scale(.75)', verticalAlign:'middle'}}/>
							<span className='fss' style={{verticalAlign:'middle'}}> Like</span>
						</Col>
						<Col md={6} className='text-align-center'>
							<ChatBubbleOutline style={{transform: 'scale(.75)', verticalAlign:'middle'}}/>
							<span className='fss' style={{verticalAlign:'middle'}}> Comment</span>
						</Col>
					</Row>
				</Paper>
				<Comments />
			</div>
			);
	};
}

class Comments extends Component {
	render() {
		return (
			<Paper zDepth={1} className='newsfeed-post' style={{backgroundColor: '#fafafa', height: 10, width: '100%'}}>
				
			</Paper>
			)
	}
}
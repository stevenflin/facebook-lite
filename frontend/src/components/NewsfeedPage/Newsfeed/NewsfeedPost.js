import React from 'react';
import { Row, Col } from 'react-bootstrap';

import Paper from 'material-ui/Paper';
import ChatBubbleOutline from 'material-ui-icons/ChatBubbleOutline';
import FavoriteBorder from 'material-ui-icons/FavoriteBorder';

import Comments from './Comments';

const NewsfeedPost = ({post}) => (
	<div>
		<Paper zDepth={1} className='newsfeed-post'>
			<a href='#'>{`${post.user.firstName} ${post.user.lastName}`}</a>
			<p className='fss'>{post.date}</p>
			<p>{post.content}</p>
			<hr/>
			<Row className='reset-spacing'>
				<Col md={6} className='text-align-center'>
					<FavoriteBorder className='vam' style={{transform: 'scale(.75)'}}/>
					<span className='fss vam'> Like</span>
				</Col>
				<Col md={6} className='text-align-center'>
					<ChatBubbleOutline className='vam' style={{transform: 'scale(.75)'}}/>
					<span className='fss vam'> Comment</span>
				</Col>
			</Row>
		</Paper>
		<Comments postId={post._id}/>
		<br/>
	</div>
);

export default NewsfeedPost;
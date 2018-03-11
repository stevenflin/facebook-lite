import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import { getNewsfeed, post } from '../../../redux/asyncActions';

class NewsfeedNewPost extends Component {
	constructor(props) {
		super(props);

    this.state = {
    	content: '',
    };
  };

  handlePostChange = (e, content) => this.setState({content});

	post = () => {
		let post = {content: this.state.content, userId: this.props.match.params.userId}
		this.props.post(post)
		.then((resp)=> resp.json())
		.then(resp => console.log(resp))
	};

	render() {
		return (
			<Paper zDepth={1}>
				<div className='newsfeed-post-new'>
				<TextField
					type='text'
					value={this.state.content}
					onChange={this.handlePostChange}
		      floatingLabelText={'What\'s on your mind, Steven?'}
		      inputStyle={{fontSize:'small'}}
		      style={{width: '100%'}}
		    />
		    <RaisedButton  
					label='post' 
					onClick={this.post}
					backgroundColor='#4285f4'
					labelColor='white'
		    />
		    </div>
			</Paper>
			);
	};
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  getNewsfeed: (userId) => dispatch(getNewsfeed(userId)),
  post: (content) => dispatch(post(content)),
});

NewsfeedNewPost = connect(mapStateToProps, mapDispatchToProps)(NewsfeedNewPost);

NewsfeedNewPost = withRouter(NewsfeedNewPost);

export default NewsfeedNewPost;

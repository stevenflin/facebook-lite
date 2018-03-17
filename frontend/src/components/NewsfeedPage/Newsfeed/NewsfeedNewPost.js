import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import { getNewsfeed, post } from '../../../redux/asyncActions';
import { loadNewsfeed } from '../../../redux/actions';

class NewsfeedNewPost extends Component {
	constructor(props) {
		super(props);

    this.state = {
    	content: '',
    };
  };

  handlePostChange = (e, content) => this.setState({content});

	post = () => {
		let post = {content: this.state.content, user: this.props.match.params.userId}
		this.props.post(post)
		.then(resp => resp.json())
		.then(resp => {
			if(resp.success) 
				this.props.getNewsfeed(this.props.match.userId)
				.then((resp) => resp.json())
				.then((data) => {
					this.setState({content: ''});
					this.props.loadNewsfeed(data.body);
				});
		});
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
					floatingLabelFocusStyle={{color:'#4885ed'}}
					underlineFocusStyle={{borderColor:'#4885ed'}}
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
  loadNewsfeed: (newsfeed) => dispatch(loadNewsfeed(newsfeed)),
  post: (content) => dispatch(post(content)),
});

NewsfeedNewPost = connect(mapStateToProps, mapDispatchToProps)(NewsfeedNewPost);

NewsfeedNewPost = withRouter(NewsfeedNewPost);

export default NewsfeedNewPost;

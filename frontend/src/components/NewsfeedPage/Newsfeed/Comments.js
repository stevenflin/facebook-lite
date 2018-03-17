import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux'

// material ui
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import Chip from 'material-ui/Chip';

// components
import Comment from './Comment';

// redux
import { getNewsfeed, getComments, comment } from '../../../redux/asyncActions';
import { loadNewsfeed } from '../../../redux/actions';

class Comments extends Component {

	constructor(props) {
		super(props);

    this.state = {
    	comment: '',
    	comments: [],
    };
	};

	handleCommentChange = (e, comment) => this.setState({comment});

	comment = () => {
		let comment = {content: this.state.comment, user: this.props.match.params.userId, post: this.props.postId};
		this.props.comment(comment)
		.then(resp => resp.json())
		.then(resp => {
			if(resp.success) {
				this.props.getNewsfeed(this.props.match.userId)
				.then((resp) => resp.json())
				.then((data) => {
					this.setState({comment: ''});
					this.props.loadNewsfeed(data.body);
				});
			}
		});
	}

	getComments = () => {
		this.props.getComments(this.props.postId)
		.then(resp => resp.json())
		.then(resp => this.setState({comments: resp.body}));
	}

	componentDidMount() {
		this.getComments();
	}

	render() {
		return (
			<Paper 
				zDepth={1} 
				className='newsfeed-post' 
				style={{backgroundColor: '#fafafa', width: '100%'}}
			>	
				{this.state.comments.map((comment,index) => {
					comment = {
						firstName: comment.user.firstName,
						lastName: comment.user.lastName,
						content: comment.content
					}
					return <Comment key={index} comment={comment} />
				})}
				<TextField
					type='text'
					onChange={this.handleCommentChange}
					onKeyPress={(event) => (event.charCode === 13) ? this.comment() : ''}
					hintText='Comment on this post...'
		      inputStyle={{fontSize:'small'}}
		      underlineFocusStyle={{borderColor:'#4885ed'}}
		      style={{width: '100%'}}
		    />
			</Paper>
			);
	}
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  getNewsfeed: (userId) => dispatch(getNewsfeed(userId)),
  loadNewsfeed: (newsfeed) => dispatch(loadNewsfeed(newsfeed)),
  comment: (content) => dispatch(comment(content)),
  getComments: (postId) => dispatch(getComments(postId)),
});

Comments = connect(mapStateToProps, mapDispatchToProps)(Comments);

Comments = withRouter(Comments);

export default Comments;
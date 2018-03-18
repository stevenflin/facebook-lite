import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux'

// material ui
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

// components
import Comment from './Comment';

// redux
import { fetchComments, comment } from '../../../redux/asyncActions';

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
		.then((resp) => {
			if(resp.data.success) 
				this.fetchComments(this.props.postId);
		});
	}

	componentDidMount() {
		this.fetchComments(this.props.postId);
	};

	componentWillReceiveProps(nextProps) {
		this.fetchComments(nextProps.postId)
	}

	fetchComments = (postId) => {
		this.props.fetchComments(postId)
		.then(resp => this.setState({comment: '', comments: resp.data.body}));
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
					value={this.state.comment}
					onChange={this.handleCommentChange}
					onKeyPress={(event) => (event.charCode === 13) ? this.comment() : ''}
					hintText='Comment on this post...'
					hintStyle={{fontSize:'small'}}
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
  comment: (content) => dispatch(comment(content)),
  fetchComments: (postId) => dispatch(fetchComments(postId)),
});

Comments = connect(mapStateToProps, mapDispatchToProps)(Comments);

Comments = withRouter(Comments);

export default Comments;
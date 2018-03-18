import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import NewsfeedNewPost from './NewsfeedNewPost';
import NewsfeedPost from './NewsfeedPost';

import { fetchNewsfeed, fetchUser, fetchNext10 } from '../../../redux/asyncActions';
import { loadUser } from '../../../redux/actions';

const NewsfeedPresentation = ({newsfeed, fetchNext10}) => (
	<div>
		<NewsfeedNewPost />
		<br/>
		{newsfeed.map((post, index) => (
			<NewsfeedPost key={index} post={post} />
		))}
		<p className='view-more-posts fss' onClick={fetchNext10}>View more posts</p>
	</div>
);

class Newsfeed extends Component {

	componentDidMount() {
		let userId = this.props.match.params.userId;
		let dispatch = this.props.dispatch;
		dispatch(fetchNewsfeed(userId));
		dispatch(fetchUser(userId))
		.then((resp) => dispatch(loadUser(resp.data.body)));
	};

	fetchNext10 = () => {
		let date = this.props.newsfeed[this.props.newsfeed.length-1].date;
		this.props.dispatch(fetchNext10(date));
	};

	render() {
		return <NewsfeedPresentation 
			newsfeed={this.props.newsfeed}
			fetchNext10={this.fetchNext10}
		/>;
	};
};

const mapStateToProps = (state) => ({
  newsfeed: state.newsfeed,
});

const mapDispatchToProps = (dispatch) => ({
	dispatch: dispatch,
});

Newsfeed = connect(mapStateToProps, mapDispatchToProps)(Newsfeed);

Newsfeed = withRouter(Newsfeed);

export default Newsfeed;
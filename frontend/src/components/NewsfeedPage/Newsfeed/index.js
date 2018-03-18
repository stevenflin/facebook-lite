import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import NewsfeedNewPost from './NewsfeedNewPost';
import NewsfeedPost from './NewsfeedPost';

import { fetchNewsfeed, fetchUser } from '../../../redux/asyncActions';
import { loadUser } from '../../../redux/actions';

const NewsfeedPresentation = ({newsfeed}) => (
	<div>
		<NewsfeedNewPost />
		<br/>
		{newsfeed.map((post, index) => (
			<NewsfeedPost key={index} post={post} />
		))}
	</div>
);

class Newsfeed extends Component {

	componentDidMount() {
		let userId = this.props.match.params.userId;
		this.props.fetchNewsfeed(userId);
		this.props.fetchUser(userId)
		.then((resp) => this.props.dispatch(loadUser(resp.data.body)));
	}

	render() {
		return <NewsfeedPresentation newsfeed={this.props.newsfeed}/>;
	};
};

const mapStateToProps = (state) => ({
  newsfeed: state.newsfeed,
});

const mapDispatchToProps = (dispatch) => ({
  fetchNewsfeed: (userId) => dispatch(fetchNewsfeed(userId)),
	fetchUser: (userId) => dispatch(fetchUser(userId)),
	dispatch: dispatch,
});

Newsfeed = connect(mapStateToProps, mapDispatchToProps)(Newsfeed);

Newsfeed = withRouter(Newsfeed);

export default Newsfeed;
import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import NewsfeedNewPost from './NewsfeedNewPost';
import NewsfeedPost from './NewsfeedPost';

import { fetchNewsfeed } from '../../../redux/asyncActions';

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
		this.props.fetchNewsfeed(this.props.match.userId);
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
});

Newsfeed = connect(mapStateToProps, mapDispatchToProps)(Newsfeed);

Newsfeed = withRouter(Newsfeed);

export default Newsfeed;
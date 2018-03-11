import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import NewsfeedNewPost from './NewsfeedNewPost';
import NewsfeedPost from './NewsfeedPost';

import { getNewsfeed } from '../../../redux/asyncActions';
import { loadNewsfeed } from '../../../redux/actions';

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

	componentWillMount() {
		let { getNewsfeed, loadNewsfeed } = this.props;

		getNewsfeed(this.props.match.userId)
		.then((resp) => resp.json())
		.then((data) => loadNewsfeed(data.body));
	}

	render() {
		return <NewsfeedPresentation newsfeed={this.props.newsfeed}/>;
	};
};

const mapStateToProps = (state) => ({
  newsfeed: state.newsfeed,
});

const mapDispatchToProps = (dispatch) => ({
  getNewsfeed: (userId) => dispatch(getNewsfeed(userId)),
  loadNewsfeed: (newsfeed) => dispatch(loadNewsfeed(newsfeed)),
});

Newsfeed = connect(mapStateToProps, mapDispatchToProps)(Newsfeed);

Newsfeed = withRouter(Newsfeed);

export default Newsfeed;
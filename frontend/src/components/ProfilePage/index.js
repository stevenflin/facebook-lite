import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import { fetchUser } from '../../redux/asyncActions';
import { loadProfile } from '../../redux/actions';

class ProfilePage extends Component {

	componentDidMount() {
		this.props.dispatch(fetchUser(this.props.match.params.userId))
		.then((resp) => this.props.dispatch(loadProfile(resp.data.body)));
	}

	render() {
		return (
				<div>

				</div>
			);
	};
};

const mapStateToProps = (state) => ({
	profile: state.profile,
});

const mapDispatchToProps = (dispatch) => ({
	dispatch,
});

ProfilePage = connect(mapStateToProps, mapDispatchToProps)(ProfilePage);

ProfilePage = withRouter(ProfilePage);

export default ProfilePage;
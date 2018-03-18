import React, { Component } from 'react';
import { connect } from 'react-redux';

// material ui
import Drawer from 'material-ui/Drawer';
import Avatar from 'material-ui/Avatar';

// redux
import { fetchFriends } from '../../redux/asyncActions';
import { addChatBox } from '../../redux/actions';

class Chats extends Component {

	componentDidMount() {
		this.props.dispatch(fetchFriends());
	};

	addChatBox = (friend) => {
		this.props.dispatch(addChatBox(friend));
	};

	render() {
		return (
			<div></div>
      );
	};
};

const mapStateToProps = (state) => ({
  chats: state.chats,
});

const mapDispatchToProps = (dispatch) => ({
	dispatch,
});

FriendsList = connect(mapStateToProps, mapDispatchToProps)(FriendsList);

export default FriendsList;
import React, { Component } from 'react';
import { connect } from 'react-redux';

// material ui

// components
import Chat from './Chat';

// redux

class Chats extends Component {

	render() {
		console.log('[CHATS]', this.props.chats);
		return (
			<div className='chats'>
				{this.props.chats.map((chat,index) => <Chat key={index} chat={chat} />)}
			</div>
      );
	};
};

const mapStateToProps = (state) => ({
  chats: state.chats,
});

const mapDispatchToProps = (dispatch) => ({
	dispatch,
});

Chats = connect(mapStateToProps, mapDispatchToProps)(Chats);

export default Chats;
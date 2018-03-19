import React, { Component } from 'react';
import { connect } from 'react-redux';

// material ui

// redux

class Chat extends Component {

	constructor(props) {
		super(props);

    this.state = {
    	open: true,
    };
  };

  toggleChat = () => this.setState({open: !this.state.open})

	render() {
		const display = (this.state.open) 
		? (
			<div className='chat'>
				<div className='chat-header' onClick={this.toggleChat}>
					{this.props.chat.firstName}
				</div>
				<div className='chat-box'>
					<div className='from-message mv10'>
						<p className='reset-spacing fss'>this looks like a really loooong message what does it look like tho</p>
					</div>
					<div className='to-message mv10 pull-right'>
						<p className='reset-spacing fss'>this looks like a really loooong message what does it look like tho</p>
					</div>
					<div className='to-message mv10'>
						<p className='reset-spacing fss'>fd</p>
					</div>
					<div className='from-message mv10'>
						<p className='reset-spacing fss'>s it look like tho</p>
					</div>
				</div>
			</div>
			) 
		: (
			<div className='chat-min' onClick={this.toggleChat}>
				{this.props.chat.firstName}
			</div>
			);

		return (
			<div className='chat-container'>
			{display}
			</div>
      );
	};
};

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = (dispatch) => ({
	dispatch,
});

Chat = connect(mapStateToProps, mapDispatchToProps)(Chat);

export default Chat;
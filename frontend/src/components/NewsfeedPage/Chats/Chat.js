import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

// material ui
import TextField from 'material-ui/TextField';

// redux
import { fetchMessages, sendMessage } from '../../../redux/asyncActions';

class Chat extends Component {

	constructor(props) {
		super(props);

    this.state = {
    	open: true,
    	message: '',
    	messages: [],
    };
  };

  componentDidMount() {
  	this.fetchMessages();
  };

  fetchMessages = () => {
  	this.props.dispatch(fetchMessages(this.props.match.params.userId, this.props.chat._id))
  	.then(resp => this.setState({message: '', messages: resp.data.body}));
  };

  toggleChat = () => this.setState({open: !this.state.open});

  handleMessageChange = (e, message) => this.setState({message});

  sendMessage = () => {
  	let message = {
  		content: this.state.message,
  		to: this.props.chat._id,
  		from: this.props.match.params.userId,
  	};
  	this.props.dispatch(sendMessage(message))
  	.then(resp => this.fetchMessages());
  };

	render() {
		console.log(this.state.messages);
		const display = (this.state.open) 
		? (
			<div className='chat'>
				<div className='chat-header' onClick={this.toggleChat}>
					{this.props.chat.firstName}
				</div>
				<div className='chat-box'>
					{this.state.messages.map(message => {
						let className = (message.from === this.props.match.params.userId)
						? 'from-message mv10' : 'to-message mv10'
						return (
							<div key={message._id} className={className}>
								<p className='reset-spacing fss'>{message.content}</p>
							</div>
							)
					})}
				</div>
				<TextField
					type='text'
					value={this.state.message}
					onChange={this.handleMessageChange}
					onKeyPress={(event) => (event.charCode === 13) ? this.sendMessage() : ''}
					hintText='Type a message...'
					hintStyle={{fontSize:'small'}}
		      inputStyle={{fontSize:'small'}}
		      underlineShow={false}
		      style={{width: '100%',backgroundColor: 'white', border: '1px solid #f6f6f6', padding: '0 5px'}}
		    />
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

Chat = withRouter(Chat);

export default Chat;
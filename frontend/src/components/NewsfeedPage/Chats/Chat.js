import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import ScrollArea from 'react-scrollbar';

// material ui
import TextField from 'material-ui/TextField';

// redux
import { fetchMessages, sendMessage } from '../../../redux/asyncActions';
import { removeChatBox } from '../../../redux/actions';

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
  	this.fetchMessages(this.props.chat._id);
  };

  componentWillReceiveProps(nextProps) {
  	this.fetchMessages(nextProps.chat._id);
  }

  fetchMessages = (chatId) => {
  	this.props.dispatch(fetchMessages(this.props.match.params.userId, chatId))
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

  close = () => {
  	this.props.dispatch(removeChatBox(this.props.chat._id))
  }

	render() {
		const display = (this.state.open) 
		? (
			<div className='chat'>
				<Row className='reset-spacing chat-header'>
					<Col md={11} className='reset-spacing' onClick={this.toggleChat}>{this.props.chat.firstName}</Col>
					<Col md={1} className='reset-spacing text-align-center' onClick={this.close}>x</Col>
				</Row>
				<ScrollArea
	        speed={0.8}
	        className='chat-box'
	        horizontal={false}
	      >
					{this.state.messages.map(message => {
						let className = (message.from === this.props.match.params.userId)
						? 'from-message mv10' : 'to-message mv10'
						return (
							<div key={message._id} className={className}>
								<p className='reset-spacing fss'>{message.content}</p>
							</div>
							)
					})}
				</ScrollArea>
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
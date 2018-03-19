import React, { Component } from 'react';
import { connect } from 'react-redux';
import randomMC from 'random-material-color';

// material ui
import Drawer from 'material-ui/Drawer';
import Avatar from 'material-ui/Avatar';

// redux
import { fetchFriends } from '../../redux/asyncActions';
import { addChatBox } from '../../redux/actions';

class FriendsList extends Component {

	componentDidMount() {
		this.props.dispatch(fetchFriends());
	};

	addChatBox = (friend) => {
		this.props.dispatch(addChatBox(friend));
	};

	render() {
		return (
			<Drawer 
				open={true} 
				openSecondary={true} 
				width={200} 
				containerStyle={{
					height: '89.55vh', 
					top: '10.45vh', 
					boxShadow: 'none', 
					borderLeft: '1px solid #d3d3d3'}}
			>
				<div>
					<p className='reset-spacing fss contacts'><strong>CONTACTS</strong></p>
					{this.props.friends.map((friend,index) => (
						<div className='friend' onClick={()=>this.addChatBox(friend)}>
						<Avatar backgroundColor={randomMC.getColor()} className='vam' style={{marginRight: 5}} size={30}>{friend.firstName[0]}</Avatar>
						<span className='reset-spacing fss vam'>{`${friend.firstName} ${friend.lastName}`}</span>
						</div>
						)
					)}
				</div>
      </Drawer>
      );
	};
};

const mapStateToProps = (state) => ({
  friends: state.friends,
});

const mapDispatchToProps = (dispatch) => ({
	dispatch,
});

FriendsList = connect(mapStateToProps, mapDispatchToProps)(FriendsList);

export default FriendsList;
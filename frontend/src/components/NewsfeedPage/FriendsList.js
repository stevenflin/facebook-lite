import React, { Component } from 'react';
import { connect } from 'react-redux';

// material ui
import Drawer from 'material-ui/Drawer';

// redux
import { fetchFriends } from '../../redux/asyncActions';

class FriendsList extends Component {

	componentDidMount() {
		this.props.dispatch(fetchFriends());
	}

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
				<div className='friends-list'>
					<p className='reset-spacing fss contacts'><strong>CONTACTS</strong></p>
					{this.props.friends.map(friend => <p className='reset-spacing friend fss'>{`${friend.firstName} ${friend.lastName}`}</p>)}
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
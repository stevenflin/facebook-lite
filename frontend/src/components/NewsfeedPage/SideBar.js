import React, { Component } from 'react';
import { connect } from 'react-redux';

class SideBar extends Component {

	render() {
		return (
			<div className='side-bar'>
				<p className='mv5 side-bar-option'>{this.props.displayName}</p>
				<p className='mv5 side-bar-option'>Newsfeed</p>
			</div>
			);
	};
};

const mapStateToProps = (state) => ({
  displayName: `${state.user.firstName} ${state.user.lastName}`,
});

SideBar = connect(mapStateToProps)(SideBar);

export default SideBar;
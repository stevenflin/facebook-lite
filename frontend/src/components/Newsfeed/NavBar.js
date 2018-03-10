import React, { Component } from 'react';
import SearchBar from 'material-ui-search-bar';

export default class NavBar extends Component {
	render() {
		return (
			<div className='nav'>
				<SearchBar
				    onChange={() => console.log('onChange')}
				    onRequestSearch={() => console.log('onRequestSearch')}
				    style={{
				        width: '30vw',
				        margin: '1.5vh 0 0 5vw'
				    }}
				/>
			</div>
			);
	};
};
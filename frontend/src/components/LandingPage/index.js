import React, { Component } from 'react';

import Header from './Header/index';
import Main from './Main/index';

import '../../css/LandingPage.css';

export default class LandingPage extends Component {
  render() {
    return <LandingPagePresentation />;
  };
};

class LandingPagePresentation extends Component {
  render() {
	  return (
	  	<div>
	    	<Header />
	    	<Main />
	  	</div>
	  	);
	};
};
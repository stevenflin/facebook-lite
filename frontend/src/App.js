import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

// Material-UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Components
import LandingPage from './components/LandingPage/index';
import Newsfeed from './components/Newsfeed/index';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      	<Routes />
      </MuiThemeProvider>
    	);
  };
};

class Routes extends Component {
	render() {
		return (
				<Router>
      		<div>
			      <Route exact path='/' component={LandingPage} />
			      <Route path='/newsfeed' component={Newsfeed} />
			    </div>
			  </Router>
			);
	};
};

export default App;

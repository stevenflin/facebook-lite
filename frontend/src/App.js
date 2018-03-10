import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import './App.css';

// Material-UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Components
import LandingPage from './components/LandingPage/index';
import Login from './components/Login/index';
import NewsfeedPage from './components/Newsfeed/index';

import reducers from './redux/reducers';

let store = createStore(reducers, applyMiddleware(thunk));

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      	<Provider store={store}>
      		<Routes />
      	</Provider>
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
            <Route path ='/login' component={Login} />
			      <Route path='/newsfeed' component={NewsfeedPage} />
			    </div>
			  </Router>
			);
	};
};

export default App;

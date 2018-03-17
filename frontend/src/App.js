import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import './css/App.css';
import './css/SpacingAndSizing.css';
import history from './history';

// Material-UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Components
import LandingPage from './components/LandingPage/index';
import LoginPage from './components/LoginPage/index';
import NewsfeedPage from './components/NewsfeedPage/index';

// redux
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
				<Router history={history}>
      		<div>
			      <Route exact path='/' component={LandingPage} />
            <Route path ='/login' component={LoginPage} />
			      <Route path='/newsfeed/:userId' component={NewsfeedPage} />
			    </div>
			  </Router>
			);
	};
};

export default App;

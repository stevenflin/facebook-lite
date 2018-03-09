import React, { Component } from 'react';
import './App.css';

// Material-UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Components
import LandingPage from './components/LandingPage/index';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <LandingPage />
      </MuiThemeProvider>
    );
  }
}

export default App;

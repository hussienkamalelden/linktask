import React, { Component } from 'react';
import Navbar from './shared_components/navbar_component/navbar';

class App extends Component {
  state = {}
  render() {
    return (
      <React.Fragment>
        <Navbar />
      </React.Fragment>
    );
  }
}

export default App;
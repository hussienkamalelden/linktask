import React, { Component } from 'react';
import Navbar from './shared_components/navbar_component/navbar';
import Footer from './shared_components/footer_component/footer';

class App extends Component {
  state = {}
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
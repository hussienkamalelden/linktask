import React, { Component } from 'react';
import Navbar from './shared_components/navbar_component/navbar';
import Footer from './shared_components/footer_component/footer';
import Home from './pages/home/home';

class App extends Component {
  state = {}
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Home />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
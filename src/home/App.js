import React, { Component } from 'react';
import Header from './Header'
import Links from './Links'

class App extends Component {
  componentDidMount() {
    document.title = 'Front-End Toolbox'
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <Links />
      </div>
    );
  }
}

export default App;

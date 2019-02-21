import React, { Component } from 'react';
import NavBarComponent from './component/navBar';
import './App.css';
import Counters from './component/counters';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBarComponent/>
        <main className="container" >
          <Counters />
        </main>
      </React.Fragment>
    );
  }
}

export default App;

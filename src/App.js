import React, { Component } from 'react';
import './App.css';

import Add from './container/Add';
import List from './container/List';
import Switcher from './container/Switcher';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Add />
        <Switcher />
        <List />
      </div>
    );
  }
}

export default App;

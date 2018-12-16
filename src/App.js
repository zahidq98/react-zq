import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Button bsStyle="primary">Primary</Button>
        </header>
      </div>
    );
  }
}

export default App;

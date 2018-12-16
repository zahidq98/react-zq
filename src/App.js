import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import Header from './components/layout/header';


import './App.css';

class App extends Component {
  render() {
    return (
        <Grid>
            <Row>
              <Header />
            </Row>
        </Grid>
    );
  }
}

export default App;

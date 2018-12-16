import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import Navbar from './navbar';

class Header extends Component {
    render() {
    return (
        <div>
            <Col xs={6} className="my-header">
                My App
            </Col>
            <Col xs={6} >
                <Navbar />
            </Col>
        </div>
    );
  }
}

export default Header;

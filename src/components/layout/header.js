import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

class Header extends Component {
    render() {
    return (
        <Col xs={12} className="my-header">
            My App
        </Col>
    );
  }
}

export default Header;

import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

class Navbar extends Component {
    render() {

    const items = ['Home', 'Contact', 'About Us'];
    
    return (
        <Col xs={12} className ="my-navbar">
            <ul>
                { items.map((item) => <li>{item}</li>)}
            </ul>
        </Col>
    );
  }
}

export default Navbar;

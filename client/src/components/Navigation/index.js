import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

class Navigation extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">Google Books</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/search">
              Search
            </Nav.Link>
            <Nav.Link as={Link} to="/saved">
              Saved
            </Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;

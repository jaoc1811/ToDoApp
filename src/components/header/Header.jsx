import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

/**
 * Render App's Header
 */
const Header = () => (
  <Navbar bg="primary" variant="dark" expand="lg">
    <div className="container">
      <Navbar.Brand as={Link} to="/">
        {' '}
        <img src="carlitos.png" width="40" alt="carlitos.png" />
        To-Do List
        {' '}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbarmodule-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">To-Do List</Nav.Link>
          <Nav.Link as={Link} to="/favorites">Favorites</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </div>
  </Navbar>
);

export default Header;

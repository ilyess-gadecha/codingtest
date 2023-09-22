import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FaSearch } from 'react-icons/fa'; // Import the search icon from react-icons library

function Navb() {
  const navLinkStyle = {
    paddingRight: '20px', // Adjust as needed to add space between items
  };

  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      style={{ paddingLeft: 0, paddingRight: 0, margin: 0 }} // Remove margin and padding
    >
      <Container fluid> {/* Use a fluid container */}
        {/* Customize the title */}
        <Navbar.Brand href="#home" style={{ fontWeight: 'bold' }}>
          ETF Finder
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* Create dropdown menu for Insights */}
            <NavDropdown title="Insights" id="insights-dropdown">
              <NavDropdown.Item href="https://www.linkedin.com/in/ilyess-gadecha/">Option 1</NavDropdown.Item>
              <NavDropdown.Item href="https://www.linkedin.com/in/ilyess-gadecha/">Option 2</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://www.linkedin.com/in/ilyess-gadecha/">Option 3</NavDropdown.Item>
            </NavDropdown>

            {/* Create dropdown menu for Investment Capabilities */}
            <NavDropdown title="Investment Capabilities" id="capabilities-dropdown">
              <NavDropdown.Item href="https://www.linkedin.com/in/ilyess-gadecha/">Option 1</NavDropdown.Item>
              <NavDropdown.Item href="https://www.linkedin.com/in/ilyess-gadecha/">Option 2</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/2.3">Option 3</NavDropdown.Item>
            </NavDropdown>

            {/* Create dropdown menu for Resources */}
            <NavDropdown title="Resources" id="resources-dropdown">
              <NavDropdown.Item href="https://www.linkedin.com/in/ilyess-gadecha/">Option 1</NavDropdown.Item>
              <NavDropdown.Item href="https://www.linkedin.com/in/ilyess-gadecha/">Option 2</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://www.linkedin.com/in/ilyess-gadecha/">Option 3</NavDropdown.Item>
            </NavDropdown>

            {/* Create dropdown menu for About Us */}
            <NavDropdown title="About Us" id="about-dropdown">
              <NavDropdown.Item href="https://www.linkedin.com/in/ilyess-gadecha/">Option 1</NavDropdown.Item>
              <NavDropdown.Item href="https://www.linkedin.com/in/ilyess-gadecha/">Option 2</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://www.linkedin.com/in/ilyess-gadecha/">Option 3</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {/* Add a search bar on the right with a flex layout */}
          <div
            className="d-flex align-items-center"
            style={{ marginLeft: 'auto', paddingRight: '20px' }}
          >
            <Nav.Link href="https://www.linkedin.com/in/ilyess-gadecha/" style={navLinkStyle}>
              Search
            </Nav.Link>
            <FaSearch />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navb;

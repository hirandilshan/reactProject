import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./styleNav.css";
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'



function NavigationBar() {
  


  const [isLoggedIn, setIsLoggedIn] = useState(false);
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get("http://localhost:8070/user/token")
      .then(result => {
        if (result.data === "Success") {
          alert("tokenSuccess")
          setIsLoggedIn(true);
        } else {
          alert("tokenNOTSuccess")
          setIsLoggedIn(false);
        }
      });
  }, []);

  const handleLogout = () => {
    axios.get("http://localhost:8070/user/logout")
      .then(result => {
        if (result.data === "logout") {
          setIsLoggedIn(false);
        }
      });
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/" className='logo'>EATOUT</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className="nav-link" href="/foodMenu">Food Menu</Nav.Link>
            <Nav.Link href="/offers">Offers</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/reservation">Reservation</Nav.Link>
            <NavDropdown title="More" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/serviceTypes">Service Type</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/gallery">Gallery</NavDropdown.Item>
              <NavDropdown.Item href="/facilities">Facilities</NavDropdown.Item>
              
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Form className="login">
            {isLoggedIn ? (
              <Button variant="outline-success" onClick={handleLogout} href="/">LogOut</Button>
            ) : (
              <Button variant="outline-success" href="/login">LogIn</Button>
            )}
          </Form>
          <Nav.Link className="cart" href="/foodCart"><FontAwesomeIcon icon={faCartShopping} /></Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;

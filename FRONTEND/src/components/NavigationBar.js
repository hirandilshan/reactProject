import React , {useEffect ,useState} from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./styleNav.css";
import { Link } from 'react-router-dom';
import axios from 'axios'



function NavigationBar() {
  const [logIn, setLogIn] = useState("LogIn");
  axios.defaults.withCredentials = true;
  useEffect(()=>{
      axios.get("http://localhost:8070/user/token")
      .then(result=>{console.log(result)
          if(result.data!=="Success"){
              setLogIn("LogIn");
          }else{
              setLogIn("LogOut");
          }
      })
  })


;
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid >
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
              
              <NavDropdown.Item href="/serviceTypes">
                Service Type
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/gallery">
                Gallery
              </NavDropdown.Item>
              <NavDropdown.Item href="/facilities">
                Facilities
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                {logIn}
              </NavDropdown.Item>
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
           <Button variant="outline-success" as={Link} to="/login" >{logIn}</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
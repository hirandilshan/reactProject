import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./styleNav.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'




function NavigationBar() {
  const navigate = useNavigate();
  const[input,setInput]=useState("");
  const[results,setResults] = useState([]);


  

  const fetchData = (value) =>{
    axios
    .get("http://localhost:8070/foods/getFoods").then(res => {
      
      const result = res.data.filter((food) => {
        return value && food && food.item && food.item.toLowerCase().includes(value.toLowerCase());
      });
      
      setResults(result);
    })
  }

  const handleChange =async(value) =>{
    setInput(value)
    fetchData(value)
  }


  const [isLoggedIn, setIsLoggedIn] = useState(false);
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get("http://localhost:8070/user/token")
      .then(result => {
        if (result.data === "Success") {
          setIsLoggedIn(true);
        } else {
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
  const handleSearch = (event) => {
    event.preventDefault(); // Prevent the default form submit action
    fetchData(input); // Perform the search
    navigate("/search", { state: { results } }); // Navigate after results are fetched and updated
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
          <Form className="d-flex" onSubmit={handleSearch}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={input} onChange={(e) => handleChange(e.target.value)}
            />
            <Button variant="outline-success" type='submit' >Search</Button>
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








import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./styleNav.css";

function NavigationBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid >
        <Navbar.Brand href="/" >EATOUT</Navbar.Brand>
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
              <NavDropdown.Item href="/gallary">
                Galary
              </NavDropdown.Item>
              <NavDropdown.Item href="/facilities">
                Facilities
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Logout
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
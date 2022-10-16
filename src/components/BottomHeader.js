import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

function BottomHeader() {
  return (
    <Navbar collapseOnSelect expand="lg" style={{backgroundColor:"black"}} variant="dark">
      <Container>
        <Navbar.Brand href="#home">
            <img src="./images/image.png" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features"> </Nav.Link>
            <Nav.Link href="#pricing"> </Nav.Link>
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown"> */}
              <NavDropdown.Item href="#action/3.1"> </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                 
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"> </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                
              </NavDropdown.Item>
            {/* </NavDropdown> */}
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
            <Button variant="primary">Talk To Us</Button>{' '}
            </Nav.Link>
            {/* <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BottomHeader;
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home"> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features"> </Nav.Link>
            <Nav.Link href="#pricing"> </Nav.Link>
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown"> */}
              <NavDropdown.Item href="#action/3.1">  </NavDropdown.Item>
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
            <i class="fa-brands fa-github"></i>
            GitHub
            </Nav.Link>
            <Nav.Link  href="#memes">
            <i class="fa-sharp fa-solid fa-file"></i>
            Docs
            </Nav.Link>
            <Nav.Link hred='#deets'>
            <i class="fa-sharp fa-solid fa-right-to-bracket"></i>
            Sign-In
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
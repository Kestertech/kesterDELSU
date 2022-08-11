import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import icon from './images/icon.png';
import Image from 'react-bootstrap/Image';

const NavbarComponent = () => {
    const stylesNav={
        marginRight:'45px'

    }
    return ( 
        <div>
            <Navbar bg="info" expand="lg">
      <Container className='çontainer-fluid'fluid>
        <Navbar.Brand href="#home">
          <Image src={icon} className="navHead"/>
            <h2 className="darkHeading navHead ">DELSU Abraka</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" style={stylesNav}>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="/about-us">About</Nav.Link>
            <NavDropdown title="Admission" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Post UTME</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Pre Degree
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Direct Entry</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              Admission Status
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
     );
}
 
export default NavbarComponent;
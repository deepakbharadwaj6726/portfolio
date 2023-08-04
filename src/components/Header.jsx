import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to={'/'}>FLAMEBUDZ</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to={'/'}>Home</Nav.Link>
            <Nav.Link as={Link} to={'/about'} >About</Nav.Link>
            <Nav.Link as={Link} to={'/services'}>Services</Nav.Link>
            <Nav.Link as={Link} to={'/contact'}>Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    
    </>
  );
}

export default Header;
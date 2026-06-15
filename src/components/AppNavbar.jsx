import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function AppNavbar() {
  const location = useLocation();

  return (
    <Navbar expand="md" className="navbar-custom" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Brian Wilkinson
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto" activeKey={location.pathname}>
            <Nav.Link as={Link} to="/" eventKey="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/transcripts" eventKey="/transcripts">
              Transcripts
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/web-development"
              eventKey="/web-development"
            >
              Web Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/music-career" eventKey="/music-career">
              Music Career
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

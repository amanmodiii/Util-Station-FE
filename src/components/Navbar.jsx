import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      data-bs-theme="dark"
      bg="transparent"
    >
      <Container>
        <Navbar.Brand href="/">UTIL-STATION</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="/">HOME</Nav.Link>
            <NavDropdown title="UTILITIES" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="/askmeanything">
                Ask Me Anything
              </NavDropdown.Item>
              <NavDropdown.Item href="/headlinegenerator">
                Headline Generator
              </NavDropdown.Item>
              <NavDropdown.Item href="/textsummarizer">
                Text Summarizer
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/qrgenerator">
                QR Generator
              </NavDropdown.Item>
              <NavDropdown.Item href="/urlshortener">
                URL Shortener
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBarComp() {
  return (
    <Navbar
    expand="lg"
    className="bg-body-tertiary bg-primary text-center navbar-dark fixed-top d-flex align-content-center NavBoxShadow"
    >
      <Container>
        <Navbar.Brand className="fs-2 px-5" href="/">Hospital{' '}<i class="fa-regular fa-hospital"></i></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto px-5">
            <Nav.Link className="px-4 align-content-center" href="#home">Home</Nav.Link>
            <Nav.Link className="px-4 align-content-center" href="#about">About</Nav.Link>
            <Nav.Link className="px-4 align-content-center" href="#services">Services</Nav.Link>
            <Nav.Link className="px-4 align-content-center" href="#doctors">Doctors</Nav.Link>
            <Nav.Link className="px-4 align-content-center" href="#MS">Medical Specialties</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComp;

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Outlet, Link } from "react-router-dom";

const Navbars = () => {
  return (
    <>
      {/* Fixing Navbar at the top */}
      <Navbar
        expand="lg"
        className="bg-body-secondary cone"
        style={{ position: "fixed", top: 0, width: "100%", zIndex: 1000 }}
      >
        <Container className="con">
          <Navbar.Brand href="#home" className="text-black">
            MobileWeb
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="me-auto li">
              <Link className="nav-link navv " to="/">
                Home
              </Link>
              <Link className="nav-link navv" to="/about">
                About
              </Link>
              <Link className="nav-link navv" to="/product">
                Products
              </Link>
              <Link className="nav-link navv" to="/contact">
                Contact
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Adding a margin to content to prevent overlap */}
      <div style={{ marginTop: "70px" }}>
        <Outlet />
      </div>
    </>
  );
};

export default Navbars;

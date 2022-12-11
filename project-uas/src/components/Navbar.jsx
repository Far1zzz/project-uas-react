import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Outlet, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Nav className="me-auto">
              <Nav.Link
                onClick={() => {
                  navigate("/");
                }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/InputData");
                }}
              >
                Input Data
              </Nav.Link>
              <Nav.Link
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/Profile");
                }}
              >
                Info User
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
      <Outlet />
    </React.Fragment>
  );
};

export default NavBar;

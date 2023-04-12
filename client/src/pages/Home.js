import React from "react";
import { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import MenuSearch from "../components/MenuSearch";
import Information from "../components/Information";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import LogoIcon from "../assets/images/logo.png";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/posts").then((response) =>
      response.json().then((data) => setData(data))
    );
  });
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container className="container mt-2 d-flex">
          <img
            className="me-3"
            style={{
              width: "30px",
              height: "30px",
            }}
            src={LogoIcon}
            alt=""
          />
          <Navbar.Brand className="w-100" href="/landingpages">
            <h1>ILOKA</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/createpost">Create</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <NavDropdown
                className="btn btn-info p-0"
                title="Get Started"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="/signup">Registration</NavDropdown.Item>
                <NavDropdown.Item href="/login">Login</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <MenuSearch />
      <Pagination data={data} />
      <div className="container">
        <hr />
        <Information />
      </div>
      <hr />
    </div>
  );
}

export default Home;

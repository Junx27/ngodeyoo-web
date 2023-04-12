import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import LogoIcon from "../assets/images/b.jpg";

function Posts() {
  let { id } = useParams();
  const [postObject, setPostObject] = useState({});
  useEffect(() => {
    axios.get(`http://localhost:3001/posts/byId/${id}`).then((response) => {
      setPostObject(response.data);
    });
  });

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container className="container mt-2 d-flex">
          <img
            className="me-1"
            style={{
              width: "100px",
              height: "100px",
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
      <div className="container">
        <div className="text-primary">
          <h1>{postObject.title}</h1>
        </div>
        <div className="body">"Dipublikasikan oleh: {postObject.username} </div>
        <div className="footer">{postObject.postText}" </div>
      </div>
    </div>
  );
}

export default Posts;

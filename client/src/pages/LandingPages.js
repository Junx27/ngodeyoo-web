import React from "react";
import img1 from "../assets/images/test.jpg";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import LogoIcon from "../assets/images/b.jpg";

function LandingPages() {
  let navigate = useNavigate();
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
        <div className="row align-items-center">
          <div className="col-5 offset-1">
            <h1>Pusing Menganggur?</h1>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              reprehenderit excepturi, magnam ut odit odio. Assumenda
              repellendus inventore minima possimus. Consequatur cumque dolores,
              voluptates illum suscipit dicta cupiditate eos voluptatum!
            </p>
            <button
              className="btn btn-warning"
              onClick={() => {
                navigate("/signup");
              }}
            >
              Mendaftar
            </button>
            <button
              className="btn border-primary mx-5"
              onClick={() => {
                navigate("/login");
              }}
            >
              Masuk
            </button>
          </div>
          <div className="col-5">
            <img src={img1} alt="" />
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-5">
            <img src={img1} alt="" />
          </div>
          <div className="col-5 offset-1">
            <h1>Bingung Cari Kerja?</h1>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              reprehenderit excepturi, magnam ut odit odio. Assumenda
              repellendus inventore minima possimus. Consequatur cumque dolores,
              voluptates illum suscipit dicta cupiditate eos voluptatmkjih
            </p>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default LandingPages;

import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LogoIcon from "../assets/images/b.jpg";
import Container from "react-bootstrap/Container";
import img1 from "../assets/images/test.jpg";

function LandingPages() {
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
          <Navbar.Brand className="w-100" href="#home">
            <h1>ILOKA</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="container mt-5">
        <div className="row">
          <div className="col-5 offset-1">
            <h1>Pusing Menganggur</h1>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              accusamus libero! Porro minus assumenda rem non nulla in? Id sit
              tempora odit quos, aspernatur nulla magnam magni fugit aut
              voluptates.
            </p>
            <button className="btn btn-warning">Mendaftar</button>
            <button className="btn border-primary mx-5">Masuk</button>
          </div>
          <div className="col-6">
            <img src={img1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPages;

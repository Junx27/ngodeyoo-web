import React from "react";
import img1 from "../assets/images/test.jpg";
import img2 from "../assets/images/temukankerja.jpg";
import img3 from "../assets/images/carikerja.png";
import img4 from "../assets/images/applykerja.png";
import img5 from "../assets/images/kerja.png";
import img6 from "../assets/images/dapatkerja.png";
import img7 from "../assets/images/joinus.png";
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
        <div className="row align-items-center my-5">
          <div className="col-5 offset-1">
            <h1 className="text-warning">Pusing Menganggur?</h1>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              reprehenderit excepturi, magnam ut odit odio. Assumenda
              repellendus inventore minima possimus. Consequatur cumque dolores,
              voluptates illum suscipit dicta cupiditate eos voluptatum!
            </p>
          </div>
          <div className="col-5">
            <img src={img1} alt="" style={{ width: "500px" }} />
          </div>
        </div>
        <div className="row align-items-center my-5">
          <div className="col-5">
            <img src={img2} alt="" style={{ width: "500px" }} />
          </div>
          <div className="col-5 offset-1">
            <h1 className="text-warning">Bingung Cari Kerja?</h1>
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
      <div className="container mt-3 mb-5">
        <h1 className="text-center mb-5">
          Bagaimana Cara Mendapat Kerja di ILOKA?
        </h1>
        <br />
        <div className="row text-center mb-5">
          <div className="col-3 ms-5 border border-primary rounded">
            <h5 className="mt-3 py-2 text-bg-secondary rounded text-light">
              <h2>1</h2>Cari kerja
            </h5>
            <img
              src={img3}
              alt=""
              style={{ width: "250px" }}
              className="pt-5 pb-3 px-2 rounded"
            />
          </div>
          <div className="col-3 offset-1 border border-primary rounded">
            <h5 className="mt-3 py-2 text-bg-secondary rounded text-light">
              <h2>2</h2>Apply Lamaran
            </h5>
            <img
              src={img4}
              alt=""
              style={{ width: "250px" }}
              className="pt-5 pb-3 px-2 rounded"
            />
          </div>
          <div className="col-3 offset-1 border border-primary rounded">
            <h5 className="mt-3 py-2 text-bg-secondary rounded text-light">
              <h3>3</h3>Kerja
            </h5>
            <img
              src={img5}
              alt=""
              style={{ width: "250px" }}
              className="pt-5 pb-3 px-2 rounded"
            />
          </div>
        </div>
        <hr />
        <div className="container text-center my-5">
          <h1>
            Temukan Pekerjaan Impianmu{" "}
            <span className="text-warning">Sekarang Juga</span>
            <img src={img6} alt="" />
            <h2>Bersama Perusahaan Berkualitas Penyedia Lowongan Kerja</h2>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum,
            animi. Et, repellat! Beatae, eligendi nesciunt perspiciatis
            accusamus quisquam, illo id libero facere sequi asperiores quis
            natus impedit molestias, fugit alias?
          </p>
          <button className="btn btn-warning text-light px-5">
            Tidak Dipungut Biaya Sepersenpun
          </button>
        </div>
        <hr />
        <div className="container mt-5">
          <div className="row align-items-center">
            <div className="col-6">
              <h1>Yuk Gabung</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aspernatur sint ipsa nihil exercitationem adipisci maxime,
                consectetur quam dolores quidem eius temporibus distinctio fuga
                similique! Cum, voluptatem! Ipsum nisi nulla magni.
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
            <div className="col-5 offset-1">
              <img src={img7} alt="" style={{ width: "400px" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPages;

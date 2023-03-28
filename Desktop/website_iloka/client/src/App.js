import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreatePosts from "./pages/CreatePosts";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import LogoIcon from "././assets/images/b.png";

function App() {
  return (
    <div>
      <Router>
        <Navbar bg="light" expand="lg">
          <Container className="container mt-2 d-flex">
            <img
              className="me-3"
              style={{
                width: "50px",
                height: "50px",
              }}
              src={LogoIcon}
              alt=""
            />
            <Navbar.Brand className="w-100 p-2" href="#home">
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
                  <NavDropdown.Item href="/signup">
                    Registration
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/createpost" element={<CreatePosts />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/posts/:id" element={<Posts />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

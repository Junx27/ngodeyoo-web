import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Info from "./pages/Info";
import Registration from "./pages/Registration";
import CreatePost from "./pages/CreatePost";
import LandingPages from "./pages/LandingPages";
import ProfilCompany from "./pages/ProfileCompany";
import Header from "./components/Header";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/createpost" element={<CreatePost />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/registration" element={<Registration />} />
          <Route exact path="/" element={<LandingPages />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/profilecompany" element={<ProfilCompany />} />
          <Route exact path="/info" element={<Info />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <div className="container">
        <div className="row text-start mt-5">
          <hr />
          <div className="col-3 offset-2">
            <h5 className="orange">ILOKA</h5>
            <br />
            <p className="blue ms-1">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. In ut
              unde numquam quaerat nostrum molestias expedita! Sit, cum. Non
              explicabo doloribus fuga sed labore pariatur quas unde enim!
              Laudantium, rerum!
            </p>
          </div>
          <div className="col-3 ms-4">
            <h5 className="orange">Hubungi Kami</h5>
            <br />
            <div className="blue">
              <div>Email: iloka@gmail.com</div>
              <div>Tlp: 0987 1234 7876</div>
            </div>
          </div>
          <div className="col-3 ms-4">
            <h5 className="orange">Developer</h5>
            <br />
            <div className="blue">
              <div>Senna Bhany Majid</div>
              <div>Ikshan Sulstyo Pambudi</div>
              <div>Sri Haryani</div>
              <div>Mizan Eka Putra</div>
              <div>Tri Saptono</div>
              <div>Muhamad Asvul Annas</div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-muted-footer text-center mt-3">
        Copyright@ILOKA2023
      </div>
    </div>
  );
}

export default App;

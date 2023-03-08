import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePosts from './pages/CreatePosts';
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import About from './pages/About';


function App() {
  return (
    <div className="App">
      <Router>
        <nav class="navigation">
          <li>
          <Link class ="nav" to="/">Home</Link>
          </li>
          <li>
          <Link class ="nav"  to="/createpost">Create Post</Link>
          </li>
          <li>
          <Link class ="nav"  to="/about">About</Link>
          </li>
          <li>
          <Link class ="nav"  to="/signup">SignUp</Link>
          </li>
          <li>
          <Link class ="nav"  to="/login"><button>Login</button></Link>
          </li>
        </nav>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/createpost' element={<CreatePosts/>}/>
          <Route exact path='/about' element={<About/>}/>
          <Route exact path='/signup' element={<SignUp/>}/>
          <Route exact path='/login' element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;

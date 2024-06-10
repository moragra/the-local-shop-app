import Home from "./pages/Home/Home";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import GetAdded from './pages/GetAdded/GetAdded'
import Profile from './pages/Profile/Profile'
import Credits from "./pages/Credits/Credits";
import About from "./pages/About/About";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'))
  return (
      <BrowserRouter>
      <div className="app__container">
      <Header className="header" token={token} setToken={setToken}/>
      <div className="content__wrap">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route path="/get-added" element={<GetAdded token={token}/>} />
          <Route path="/profile" element={<Profile token={token} />} />
          <Route path="/credits" element={<Credits />}/>
          <Route path="/about" element={<About />}/>
        </Routes>
      </div>
        <Footer className="footer" token={token} setToken={setToken}/>
      </div>
      </BrowserRouter>
    );
}

export default App;

import "./App.css";
import AboutUS from "./components/AboutUS";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import { heroOne } from "./data/HeroData";
import { Content } from "./components/Content/Content";
import { Home } from "./Pages/Home";
import Nav from "./Pages/Nav";
import Login from "./Pages/Login";
import Contactus from "./Pages/Contactus";
import Career from "./Pages/Career";
import Admin from "./Pages/Admin-pages/Admin";

function App() {
  return (
    <Router className="App">
      {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contactus />} />
        {/* <Route path="/about" element={<>about</>} /> */}

        <Route path="/login" element={<Login />} />
        <Route path="/career" element={<Career />} />
        <Route path="/admin" element={<Admin />}>
          <Route path="alluser" element={<>allusersasdfs</>} />

          <Route path="allemployee" element={<>allemploue</>} />
          <Route path="allapplicant" element={<>allapplicant</>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

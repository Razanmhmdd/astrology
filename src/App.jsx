import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home';
import ContactUs from './Components/ContactUs/ContactUs';
import AboutUs from './Components/Aboutus/Aboutus';  // Import AboutUs component
import Footer from './Components/Footer/Footer';
import Example from './Components/Navbar/Navbar';
import Servi from './Components/Servi/Servi';

const PageComponent = ({ Page }) => {
  return (
    <>
      
      <Example Page={<Page />} />
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<PageComponent Page={ContactUs} />} />
          <Route path="/services" element={<PageComponent Page={Servi} />} />
          <Route path="/about" element={<PageComponent Page={AboutUs} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import { createGlobalStyle } from 'styled-components';



const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f0f0f0; /* Light background color */
    color: #333; /* Dark text color */
    margin: 0;
    padding-bottom: 100px; /* Ensure space for footer */
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/*" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, Contact, Navbar } from "./components";
import Container from "@mui/material/Container";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Container maxWidth="xl">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      <Footer />
      </Container>
    </div>
  );
}

export default App;

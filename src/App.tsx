import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { Home, Contact, Navbar } from './components'
import Container from '@mui/material/Container';

function App() {
  return (
    <div>
      <Navbar />
      <Container maxWidth="xl" className='p-8'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;

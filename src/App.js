import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Profolio from './Pages/Profolio';
import Contact from './Pages/Contact';
import Header from './Components/Header'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NewProject from './Pages/NewProject';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>          
          <Route path=' https://katzunestarky.github.io/NewPortafolio/' exact element={<Home />} />
          <Route path='https://katzunestarky.github.io/NewPortafolio/about' element={<About />} />
          <Route path='https://katzunestarky.github.io/NewPortafolio/profolio' element={<Profolio />} />
          <Route path='https://katzunestarky.github.io/NewPortafolio/newProject' element={<NewProject />} />
          <Route path='https://katzunestarky.github.io/NewPortafolio/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
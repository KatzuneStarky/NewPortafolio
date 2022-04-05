import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Profolio from './Pages/Profolio';
import Contact from './Pages/Contact';
import Header from './Components/Header'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>          
          <Route path='/' exact element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/profolio' element={<Profolio />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
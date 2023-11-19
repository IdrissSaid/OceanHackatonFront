import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/Login/LoginPage';
import Home from './pages/Home'
import './App.css'
import Concertation from './pages/Concertation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/concertation' element={<Concertation />}></Route>
        <Route path="/admin" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;

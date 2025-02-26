import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import MoviePage from './pages/MoviePage';
import './styles/app.css';

export default function App(){
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MoviePage />}/>
      </Routes>
    </Router>
  );
}
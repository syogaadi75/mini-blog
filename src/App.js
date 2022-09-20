import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Header from './components/Header';
import DetailArticle from './components/DetailArticle';
import Welcome from './components/home/Welcome';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Welcome />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail-article" element={<DetailArticle />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;

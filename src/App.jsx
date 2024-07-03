import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import './pages.css';
import Header from './header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Page9 from './pages/page9';
import Homepage from './mainpage';
import Canada from './subpages/Canada';
import USApage from './subpages/USA';
import Gallery from './pages/gallery';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/canada" element={<Canada />} />
        <Route path="/usa" element={<USApage />} />
      </Routes>
      <Page9 />
    </Router>
  );
}

export default App;

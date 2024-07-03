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
import UK from './subpages/Uk';
import Australia from './subpages/Australia';
import Germany from './subpages/Germany';
import Ireland from './subpages/Ireland';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/canada" element={<Canada />} />
        <Route path="/usa" element={<USApage />} />
        <Route path="/uk" element={<UK />} />
        <Route path="/australia" element={<Australia />} />
        <Route path="/germany" element={<Germany />} />
        <Route path="/ireland" element={<Ireland />} />
      </Routes>
      <Page9 />
    </Router>
  );
}

export default App;

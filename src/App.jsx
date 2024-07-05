import { useState } from 'react';
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
import IELTS from './subpages/ieltspage';
import TOEFL from './subpages/toeflpage';
import PET from './subpages/PET';

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
        <Route path="/ielts" element={<IELTS />} />
        <Route path="/toefl" element={<TOEFL />} />
        <Route path="/pte" element={<PET />} />
      </Routes>
      <Page9 />
    </Router>
  );
}

export default App;

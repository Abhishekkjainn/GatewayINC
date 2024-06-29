import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import './pages.css';
import Header from './header/Header';
import Page1 from './pages/page1';
import Page2 from './pages/page2';

function App() {
  return (
    <>
      <Header />
      <Page1 />
      <Page2 />
    </>
  );
}

export default App;

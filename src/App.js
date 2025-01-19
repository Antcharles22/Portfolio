// Code for the main App component
import React from 'react';
import './App.css';
import { Nav } from './me/nav.js';
import { Banner } from './banner/banner.js';
import { Main } from './main/main.js';
import { Footer } from './footer/footer.js';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Main />
      <Footer />
      
    </div>
  );
}

export default App;

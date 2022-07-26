import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Articles from './components/Articles';
import Title from './components/Tiltle';
import Navbar from './components/Navbar';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Title />
      <Navbar />
      <Routes>
            <Route path="/articles" element={<Articles />} />
          </Routes>  
    </div>
    </BrowserRouter>
  );
}

export default App;

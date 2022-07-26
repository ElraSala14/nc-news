import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Articles from './components/Articles';
import Title from './components/Tiltle';
import Navbar from './components/Navbar';
import Article from './components/Article';
import Viewcomments from './components/Viewcomments';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Title />
      <Navbar />
      <Routes>
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:article_id" element={<Article />} />
            <Route path="/articles/:article_id/comments" element={<Viewcomments />} />

          </Routes>  
    </div>
    </BrowserRouter>
  );
}

export default App;

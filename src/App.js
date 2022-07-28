import './App.css';
import { React, useState} from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Error from './components/Error';
import ErrorContext from './Errorcontext/Errorcontext';

import Articles from './components/Articles';
import Title from './components/Tiltle';
import Article from './components/Article';
import Viewcomments from './components/Viewcomments';
import Navbar from './components/Navbar';
import Topics from './components/Topics';

function App() {
  const [error, setError] = useState({msg: ''});
  if (error.msg){
    return <Error message={error.msg} />
  }
  return (
    <ErrorContext.Provider value={{error, setError}}>
    <BrowserRouter>
    <div className="App">
      <Title />
      <Navbar />
      <Routes>
            <Route path="/" element={<Articles />} />
            <Route path="/topics/:topic" element={<Topics />} />
            <Route path="/articles/:article_id" element={<Article />} />
            <Route path="/articles/:article_id/comments" element={<Viewcomments />} />
          </Routes>  
    </div>
    </BrowserRouter>
    </ErrorContext.Provider>
  );
}

export default App;

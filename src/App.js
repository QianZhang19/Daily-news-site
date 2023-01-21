import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import HeadlinesContent from './Components/HeadlinesContent';
import Article from './Components/Article';
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="container">
      <Header />
      <div className="container">
        <div style={{
          width: '90%',
          margin: 'auto',
          padding: 20

        }}>
          <Routes>
            <Route index element={<HeadlinesContent />} />
            <Route path='/detail/:id' element={<Article />} />
          </Routes>

        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
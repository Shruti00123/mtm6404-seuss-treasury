import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Books from './pages/Books';
import BookDetails from './pages/Details';
import Quotes from './pages/Quotes';
import Navbar from './components/Navbar';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/books" element={<Books />} />
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/quotes" element={<Quotes />} />
      </Routes>
    </div>
  );
};

export default App;

import {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
//import {Link} from 'react-router-dom'
import Book from '../src/components/Book';
import NotFound from '../src/components/NotFound';
import Home from '../src/components/Home';
import './App.css';

function App() {





  return (
    <Router>
      <div className="App">
        <h1>Books</h1>
    

      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route  path="/book/:name" element={<Book/>}/> 
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </Router>
  );
}

export default App;

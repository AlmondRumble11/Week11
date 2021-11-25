import {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
//import {Link} from 'react-router-dom'
import Book from '../src/components/Book';
import './App.css';

function App() {



  const [book, setBook] = useState("");

  const submit = (e) => {
    e.preventDefault();
    console.log(book);
    fetch("/api/book/", {
      method: "POST",
      headers: {
          "Content-type": "application/json"
      },
      body: JSON.stringify(book),
      mode: "cors"
  })
      .then(response => response.json())
      .then(data => {
          console.log(data)
          
      });
      //setBook();
      console.log(book.name);
      window.location = "/book/"+book.name;



  }

  const change = (e) => {
    setBook({...book, [e.target.name]: e.target.value});
  }

  return (
    <Router>
      <div className="App">
        <h1>Books</h1>
        <form onSubmit={submit} onChange={change}>
                  <input type="text" name="name" id="name" placeholder="book name"/>
                  <input type="text" name="author"  id="author" placeholder="book author"/>
                  <input type="number" name="pages"  id="pages" placeholder="book pages"/>
                  <input type="submit" id="submit"/>
        </form>

      </div>
      <Routes>
        <Route  path="/book/:name" element={<Book/>}/> 
      </Routes>
    </Router>
  );
}

export default App;

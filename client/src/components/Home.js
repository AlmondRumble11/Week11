
import {  useState } from 'react'


function Book() {
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
        <form onSubmit={submit} onChange={change}>
        <input type="string" name="name" id="name" placeholder="book name"/>
        <input type="string" name="author"  id="author" placeholder="book author"/>
        <input type="number" name="pages"  id="pages" placeholder="book pages"/>
        <input type="submit" id="submit"/>
        </form>
    )
}

export default Book
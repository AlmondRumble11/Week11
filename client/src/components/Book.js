import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'


function Book() {
    const {name} = useParams();
    const [book, setBook] = useState({});
    
    useEffect(() => {
        fetch("/book/"+ name)
            .then(response => response.json())
            .then(json => {
                setBook(json);
                console.log(json);
            })

    }, [name])
    
    return (
        <div>
           
    
            <p id="name">{book.name}</p>
            <p id="author">{book.author}</p>
            <p id="pages"> {book.pages}</p>
        </div>
    )
}

export default Book

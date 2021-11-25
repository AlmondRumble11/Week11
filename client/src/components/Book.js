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
           
            <h1>{book.err}</h1>
            <h1>{book.msg}</h1>
            <p>{book.name}</p>
            <p>{book.author}</p>
            <p>{book.pages}</p>
        </div>
    )
}

export default Book

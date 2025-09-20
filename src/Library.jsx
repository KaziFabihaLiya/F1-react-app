import Book from "./books";

export default function Library(books){
    console.log(books.books.length)
    return (
        <div>
            <h2>My national Central Library</h2>
            <p>Book Collection: {books.books.length}</p>
            <p>Address: </p>
            <ul>
                {
                books.books.map(eachBook => <Book key={eachBook.id} book={eachBook}></Book>)
                }
            </ul>
        </div>
    )
}
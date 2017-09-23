import React from 'react';
import Book from './Book'

const BookShelf = (props) => {
  const {
    title,
    books,
    onChangeShelf
  } = props

  return (
    <div className="bookshelf">
      {title && (
        <h2 className="bookshelf-title">{title}</h2>
      )}
      {!books.error && (
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map(book => (
              <Book
                key={book.id}
                book={book}
                onChangeShelf={onChangeShelf}
              />)
            )}
          </ol>
        </div>
      )}
    </div>
  )
}

BookShelf.defaultProps = {
  books: []
}


export default BookShelf
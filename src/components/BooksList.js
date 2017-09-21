import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

function filterByShelf(shelf) {
  return (book) => book.shelf === shelf
}

function organizeShelfs({ books, shelfs }) {
  const filteredShelfs = {}

  Object.keys(shelfs).forEach(shelf => {
    const shelfLabel = shelfs[shelf]

    filteredShelfs[shelfLabel] = books.filter(filterByShelf(shelf))
  })

  return filteredShelfs
}

const ListBooks = (props) => {
  const {
    books,
    onChangeShelf
  } = props
  const shelfs = {
    'currentlyReading': 'Currently Reading',
    'wantToRead': 'Want to Read',
    'read': 'Read'
  }
  const filteredShelfs = organizeShelfs({ books, shelfs })

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        {
          Object.keys(filteredShelfs).map(shelfLabel => (
            <BookShelf
              key={shelfLabel}
              books={filteredShelfs[shelfLabel]}
              title={shelfLabel}
              onChangeShelf={onChangeShelf}
            />
          ))
        }
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  )
}

ListBooks.propTypes = {
  books: PropTypes.array
}

ListBooks.defaultProps = {
  books: []
}

export default ListBooks

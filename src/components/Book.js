import React from 'react'
import PropTypes from 'prop-types'
import BookShelfChanger from './BookShelfChanger'

const bookCoverStyle = {
  width: 128,
  height: 193,
}

const Book = ({ book, onChangeShelf }) => {
  let smallThumbnailUrl
  const {
    imageLinks,
    title,
    authors,
  } = book
  const authorsJoined = Array.isArray(authors) ? authors.join(', ') : '../icons/no-cover.jpg'

  smallThumbnailUrl = imageLinks
    ? `url(${imageLinks.smallThumbnail})`
    : `url(${require('../icons/no-cover.jpg')})`

  bookCoverStyle.backgroundImage = smallThumbnailUrl

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={bookCoverStyle}></div>
          <BookShelfChanger
            book={book}
            onChangeShelf={onChangeShelf}
          />
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authorsJoined}</div>
      </div>
    </li>
  )
}

Book.propTypes = {
  book: PropTypes.object
}

Book.defaultProps = {
  book: {
    authors: []
  }
}

export default Book

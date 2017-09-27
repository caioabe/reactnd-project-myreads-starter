import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const BooksShelves = ({ children }) => {
  return (
    <div>
      <div className="list-books-title"><h1>MyReads</h1></div>
      <div>
        {children}
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  )
}

BooksShelves.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
}

export default BooksShelves
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class BooksShelves extends Component {
  render() {
    const { children } = this.props

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
}

export default BooksShelves
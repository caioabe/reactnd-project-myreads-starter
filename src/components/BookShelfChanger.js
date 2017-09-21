import React, { Component } from 'react'

class BookShelfChanger extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    const { book, onChangeShelf } = this.props
    const { value } = e.target

    onChangeShelf(book, value)
  }

  render() {
    const { book } = this.props

    return (
      <div className="book-shelf-changer">
        <select defaultValue={book.shelf || 'none'} onChange={this.handleChange}>
          <option value="none" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default BookShelfChanger

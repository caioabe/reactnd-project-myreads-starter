import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Debounce } from 'react-throttle'

import BookShelf from './BookShelf'

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: '',
      results: []
    }

    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    const el = document.querySelector('.search-books-input-wrapper input')

    el.focus()
  }

  handleChange(e) {
    const { value } = e.target
    const { onSearch, books } = this.props
    const currentIds = books.map(b => b.id)

    if (value === '') {
      this.setState({ results: [] })
    } else {
      onSearch(value).then(results => {
        if (!results.error) {
          results.forEach((result, index) => {
            let foundBookIndex = currentIds.indexOf(result.id)

            results[index] = foundBookIndex >= 0 ? books[foundBookIndex] : result
          })
        }
        console.log(value, results)
        this.setState({ results })
      })
    }

    this.setState({ value })
  }

  render() {
    return (
      <div>
        <div className="search-books">
          <div className="search-books-bar">
            <Link to='/' className="close-search">Close</Link>
            <div className="search-books-input-wrapper">
              <Debounce time="500" handler="onChange">
                <input
                  type="text"
                  onChange={this.handleChange}
                  placeholder="Search by title or author"
                />
              </Debounce>
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
        </div>
        <div className="list-books-content">
          <BookShelf
            books={this.state.results}
            title={`${this.state.results.length || '0'} results`}
            onChangeShelf={this.props.onChangeShelf}
          />
        </div>
      </div>
    )
  }
}

export default SearchBar

import React from 'react'
import { Route, Link } from 'react-router-dom'

import * as BooksAPI from './BooksAPI'
import SearchBar from './components/SearchBar'
import BookShelf from './components/BookShelf';
import './App.css'
import { shelfKeys, shelfTitles } from './shelves.js'

class BooksApp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      books: [],
    }

    this.onChangeShelf = this.onChangeShelf.bind(this)
    this.renderBookList = this.renderBookList.bind(this)
  }

  onChangeShelf(book, shelf) {
    BooksAPI
      .update(book, shelf)
      .then(() => {
        this.setState(prevState => {
          const list = prevState.books.filter(b => (b.id !== book.id))
          book.shelf = shelf

          return { books: [...list, book] }
        })
      })
  }
  
  booksSelector() {
    const selectedBooks = []

    shelfKeys.forEach((key, i) => {
      selectedBooks[i] = this.state.books.filter(b => b.shelf === shelfKeys[i])
    })

    return selectedBooks
  }

  renderBookList() {
    const selectedBooks = this.booksSelector()
    const shelves = shelfKeys.map((shelf, index) => (
      <div key={shelf}>
        <BookShelf
          title={shelfTitles[index]}
          books={selectedBooks[index]}
          onChangeShelf={this.onChangeShelf}
        />
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    ))

    return (
      <div>
        <div className="list-books-title"><h1>MyReads</h1></div>
        <div>
          {shelves}
        </div>
      </div>
    )
  }

  onSearch(query) {
    return BooksAPI.search(query, 20)
  }

  componentWillMount() {
    BooksAPI
      .getAll()
      .then((response) => {
        this.setState({ books: response })
      })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={this.renderBookList} />
        <Route path='/search' render={() => (
          <SearchBar
            books={this.state.books}
            onSearch={this.onSearch}
            onChangeShelf={this.onChangeShelf}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp

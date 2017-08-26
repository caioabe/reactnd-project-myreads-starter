import React from 'react'
import { Route } from 'react-router-dom'

import * as BooksAPI from './BooksAPI'
import SearchBar from './components/SearchBar'
import BookShelf from './components/BookShelf';
import './App.css'

class BooksApp extends React.Component {
  state = {
    showSearchPage: true
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' component={BookShelf} />
        <Route path='/search' component={SearchBar} />
      </div>
    )
  }
}

export default BooksApp

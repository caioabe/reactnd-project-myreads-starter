import React from 'react'
import { Route } from 'react-router-dom'

import * as BooksAPI from './BooksAPI'
import SearchBar from './SearchBar'
import Shelf from './Shelf';
import './App.css'

class BooksApp extends React.Component {
  state = {
    showSearchPage: true
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' component={Shelf} />
        <Route path='/search' component={SearchBar} />
      </div>
    )
  }
}

export default BooksApp

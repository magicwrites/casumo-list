import React from 'react'

import Loader from './../areas/loader/component-container'
import Header from './../areas/header/component-container'
import Filters from './../areas/filters/component-container'
import Sorters from './../areas/sorters/component-container'
import BookList from './../areas/book-list/component-container'

import './style.css'

const Application = () => {
  return (
    <div>
      <Loader />

      <section className="container">
        <Header />
        <Filters />
        <Sorters />

        <main className="list">
          <BookList />
        </main>
      </section>

    </div>
  )
}

export default Application

import React from 'react';
import { BarLoader } from 'react-spinners';

import CONSTANTS from './../constants'

import BookList from './../areas/books/components/book-list/component-container';
import IconCross from './../common/icons/cross/component'

import './../test.css';

const Toggle = ({ children, className }) => {
  return (
    <div className={`toggle ${className}`}>
      <span>{ children }</span>
      <IconCross />
    </div>
  )
}

const Application = () => {
  const genres = CONSTANTS.BOOK.GENRES
  const genders = [ CONSTANTS.GENDERS.MALE, CONSTANTS.GENDERS.FEMALE ]

  return (
    <div>
      <aside className="loader">
        <div className="loader-bar">
          <BarLoader color="#ab8c71" loading={true} />
        </div>
        <div className="container">
          <div className="loader-message">Creating additional book records</div>
        </div>
      </aside>

      <section className="container">

        <header className="header">
          <h1 className="title">250,000</h1>
          <div className="subtitle">book records</div>
          <button>double that!</button>
        </header>

        <div className="filters">
          { genres.map(genre => <Toggle className="active" key={genre}><span className="type">genre :</span> { genre }</Toggle>) }
          { genders.map(gender => <Toggle className="active" key={gender}><span className="type">author :</span> { gender }</Toggle>) }
        </div>

        <div className="sorting">
          <Toggle><span className="type">sort :</span> book name</Toggle>
          <Toggle><span className="type">sort :</span> author name</Toggle>
        </div>

        <main className="list">
          <BookList />
        </main>
      </section>

    </div>
  )
}

export default Application;

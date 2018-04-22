import React from 'react';

import BookList from './../areas/books/components/book-list/component-container';
import Filters from './../areas/filters/components/filters/component-container';
import Header from './../areas/header/components/header/component-container';

import './style.css';

class Application extends React.Component {
  render() {
    return (
      <div className="app">
        <header className="header-top">
          <div className="container">
            <Filters />
          </div>
        </header>

        <header className="header-bottom">
          <div className="container" style={{ paddingBottom: '40px' }}>
            <Header />
          </div>
        </header>

        <main>
          <div className="container">
            <BookList />
          </div>
        </main>
      </div>
    );
  }
}

export default Application;

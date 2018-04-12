import React from 'react';
import _ from 'lodash';
import faker from 'faker';
import './App.css';

import Books from './components/Books'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: _.range(100000).map((x, i) => ({
        id: i + 1,
        name: faker.commerce.productName(),
        publishedAt: faker.date.past(),
        genre: _.sample(['drama', 'romance', 'action', 'fantasy', 'sci-fi', 'finance', 'horror']),
        author: {
          gender: Math.random() > 0.5 ? 'male' : 'female',
          name: faker.name.findName()
        }
      }))
    };
  }

  render() {
    return (
      <div className="app">
        <header className="header">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1>Casumo javascript challenge</h1>
              </div>
            </div>
          </div>
        </header>

        <main>
          <div className="container">
            <div className="row">
              <div className="col-6">
                <span>Sort by:</span>
                <div className="row">
                  <div className="col-3">
                    <button>Book name</button>
                  </div>
                  <div className="col-3">
                    <button>Author name</button>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <span>Filter by:</span>
                <div className="row">
                  <div className="col-3">
                    <button>Book genre</button>
                  </div>
                  <div className="col-3">
                    <button>Author gender</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <Books books={this.state.books} />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;

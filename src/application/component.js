import React from 'react';
import AnimatedNumber from 'react-animated-number';
import formatNumber from 'simple-format-number';

import BookList from './../books/book-list/component-container';
import Filters from './../filters/component-container';
import './style.css';

class Application extends React.Component {
  constructor() {
    super();

    this.state = {
      temporary: 250000
    };
  }

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
            <div className="row">
              <div className="col-8">
                <h1>Javascript challenge</h1>
                <p>Buttons in header allow you to pick sorting of your choice, or filter out certain genres or gender. Horror books on halloween are marked with red <span className="label error upper">HORROR</span> label and finance books on a last friday of the month have <span className="label success upper">finance</span> label.</p>
                <p>Enjoy!</p>
              </div>
            
              <div className="col-4" style={{ textAlign: 'right' }}>
                <div style={{ marginTop: '45px', marginBottom: '10px', letterSpacing: '2px' }}>
                  <AnimatedNumber
                    value={this.state.temporary}
                    style={{
                      fontSize: 32,
                      transitionProperty: 'background-color, color, opacity'
                    }}
                    formatValue={x => formatNumber(x, { fractionDigits: 0 })}
                  />
                </div>

                <div>books in play</div>

                <button onClick={() => this.setState({ temporary: this.state.temporary * 2 })}>double that!</button>
              </div>
            </div>
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

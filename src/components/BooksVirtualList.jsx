import React from 'react';
import { List, WindowScroller } from 'react-virtualized'
import 'react-virtualized/styles.css'; // only needs to be imported once

class BooksVirtualList extends React.Component {
  render() {
    const { books, width } = this.props;

    return (
      <WindowScroller>
        {({ height, isScrolling, registerChild, scrollTop }) => (
          <section>
            <header>Books:</header>
            <div ref={registerChild}>
              <List
                autoHeight
                height={height}
                isScrolling={isScrolling}
                scrollTop={scrollTop}
                width={width}
                rowHeight={40}
                rowCount={books.length}
                rowRenderer={({ key, index, isScrolling, isVisible, style }) => {
                  const book = books[index]

                  return (
                    <div
                      key={key}
                      style={style}
                      className="row"
                    >
                      <div className="col-2">
                        <span>{ book.id }</span>
                      </div>
                      <div className="col-5">
                        <strong>{ book.name }</strong>
                      </div>
                      <div className="col-5" style={{ textAlign: 'right' }}>
                        <span>by { book.author.name }</span>
                      </div>
                    </div>
                  )
                }}
              />
            </div>
          </section>
        )}
      </WindowScroller>
    );
  }
}

export default BooksVirtualList;
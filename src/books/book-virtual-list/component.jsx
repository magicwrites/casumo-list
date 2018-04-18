import React from 'react';
import { List, WindowScroller } from 'react-virtualized'

import Book from './../book/component'

class BookVirtualList extends React.Component {
  render() {
    const { books, width } = this.props;
    const rowHeight = 45;

    if (!books.length) {
      return <div>Seems like there are no books matching your filters!</div>
    }

    return (
      <WindowScroller>
        {({ height, isScrolling, registerChild, scrollTop }) => (
          <div ref={registerChild} style={{ borderBottom: '1px solid #eee' }}>
            <List
              autoHeight
              height={height}
              isScrolling={isScrolling}
              scrollTop={scrollTop}
              width={width}
              rowHeight={rowHeight}
              rowCount={books.length}
              rowRenderer={({ key, index, isScrolling, isVisible, style }) => {
                const book = books[index]

                return (
                  <div key={key} style={style}>
                    <Book book={book} height={rowHeight} />
                  </div>
                )
              }}
            />
          </div>
        )}
      </WindowScroller>
    );
  }
}

export default BookVirtualList;

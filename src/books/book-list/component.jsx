import React from 'react';
import BookVirtualList from './../book-virtual-list/component'

class BookList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      width: null
    };
  }

  componentDidMount() {
    this.setState({
      width: this.refs.books.clientWidth
    })
  }

  render() {
    const { books } = this.props;
    const { width } = this.state;

    return (
      <div className="books" ref="books" style={{ width: '100%', padding: '25px 0' }}>
        {width && <BookVirtualList books={books} width={width} />}
      </div>
    );
  }
}

export default BookList;

import React from 'react';
import BooksVirtualList from './BooksVirtualList'

class Books extends React.Component {
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
      <div className="books" ref="books" style={{ width: '100%' }}>
        {width && <BooksVirtualList books={books} width={width} />}
      </div>
    );
  }
}

export default Books;

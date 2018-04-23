import React from 'react'
import classNames from 'classnames'
import moment from 'moment'
import CONSTANTS from './../../../../constants'
import { checkForHorrorOnHalloween, checkForFinanceOnMonthLastFriday } from './../../../../domain'
import IconBook from './../../../../common/icons/book'

// import './style.css'



const getDisplayDate = (timeAt) => {
  return moment(timeAt).format(CONSTANTS.FORMATS.DATE)
}

// const BookLabels = ({ book }) => {
//   const isHorrorOnHalloween = checkForHorrorOnHalloween(book);
//   const isFinanceOnMonthLastFriday = checkForFinanceOnMonthLastFriday(book);

//   const genreClasses = classNames({
//     label: true,
//     tag: !isHorrorOnHalloween && !isFinanceOnMonthLastFriday,
//     upper: isHorrorOnHalloween || isFinanceOnMonthLastFriday,
//     success: isFinanceOnMonthLastFriday,
//     error: isHorrorOnHalloween
//   })

//   return <span className={genreClasses}>{ book.genre }</span>
// }

// const Book = ({ book, height }) => {
//   return (
//     <div className="book row">
//       <div className="col-1">
//         <span className="muted">{ book.id }</span>
//       </div>
//       <div className="col-3">
//         <strong>{ book.name }</strong>
//       </div>
//       <div className="col-2">
//         <BookLabels book={book} />
//       </div>
//       <div className="col-3">
//         <span className="muted">{ getDisplayDate(book.publishedAt) }</span>
//       </div>
//       <div className="col-3" style={{ textAlign: 'right' }}>
//         <span>by { book.author.name }</span>
//         <span style={{ paddingLeft: '10px' }}>{ book.author.gender === CONSTANTS.GENDERS.MALE ? '♂' : '♀' }</span>
//       </div>
//     </div>
//   )
// }

const getBookClasses = (book) => {
  const isHorrorOnHalloween = checkForHorrorOnHalloween(book);
  const isFinanceOnMonthLastFriday = checkForFinanceOnMonthLastFriday(book);

  return classNames({
    'book': true,
    'horror-on-halloween': isHorrorOnHalloween,
    'is-finance-on-month-last-friday': isFinanceOnMonthLastFriday
  })
}

const Book = ({ book }) => {
  return (
    <div className={getBookClasses(book)}>
      <div className="book-icon">
        <IconBook />
      </div>
      <div className="book-basics">
        <strong>{ book.name }</strong>
        <div className="muted">{ book.genre } book by { book.author.name }</div>
      </div>
      <div className="book-meta">
        <div className="muted">#{ book.id }</div>
        <div>{ getDisplayDate(book.publishedAt) }</div>
      </div>
    </div>
  )
}

export default Book;

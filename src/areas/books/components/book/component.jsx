import React from 'react'
import classNames from 'classnames'
import moment from 'moment'
import CONSTANTS from './../../../../constants'
import { checkForHorrorOnHalloween, checkForFinanceOnMonthLastFriday } from './../../../../domain'

import './style.css'



const getDisplayDate = (timeAt) => {
  return moment(timeAt).format(CONSTANTS.FORMATS.DATE)
}

const BookLabels = ({ book }) => {
  const isHorrorOnHalloween = checkForHorrorOnHalloween(book);
  const isFinanceOnMonthLastFriday = checkForFinanceOnMonthLastFriday(book);

  const genreClasses = classNames({
    label: true,
    tag: !isHorrorOnHalloween && !isFinanceOnMonthLastFriday,
    upper: isHorrorOnHalloween || isFinanceOnMonthLastFriday,
    success: isFinanceOnMonthLastFriday,
    error: isHorrorOnHalloween
  })

  return <span className={genreClasses}>{ book.genre }</span>
}

const Book = ({ book, height }) => {
  return (
    <div className="book row">
      <div className="col-1">
        <span className="muted">{ book.id }</span>
      </div>
      <div className="col-3">
        <strong>{ book.name }</strong>
      </div>
      <div className="col-2">
        <BookLabels book={book} />
      </div>
      <div className="col-3">
        <span className="muted">{ getDisplayDate(book.publishedAt) }</span>
      </div>
      <div className="col-3" style={{ textAlign: 'right' }}>
        <span>by { book.author.name }</span>
        <span style={{ paddingLeft: '10px' }}>{ book.author.gender === CONSTANTS.GENDERS.MALE ? '♂' : '♀' }</span>
      </div>
    </div>
  )
}

export default Book;

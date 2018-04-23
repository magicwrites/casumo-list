import React from 'react'
import _ from 'lodash'
import classNames from 'classnames'
import moment from 'moment'
import CONSTANTS from './../../constants'
import { checkForHorrorOnHalloween, checkForFinanceOnMonthLastFriday } from './../../domain'
import IconBook from './../icons/book/component'

import './style.css'

const getDisplayDate = (timeAt) => {
  return moment(timeAt).format(CONSTANTS.FORMATS.DATE)
}

const getBookClasses = (book) => {
  const isHorrorOnHalloween = checkForHorrorOnHalloween(book);
  const isFinanceOnMonthLastFriday = checkForFinanceOnMonthLastFriday(book);

  return classNames({
    'book': true,
    'horror-on-halloween': isHorrorOnHalloween,
    'finance-on-month-last-friday': isFinanceOnMonthLastFriday
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
        <div className="muted">{ _.capitalize(book.genre) } book by { CONSTANTS.GENDERS.MALE === book.author.gender ? 'Mr' : 'Mrs' } { book.author.name }</div>
      </div>
      <div className="book-meta">
        <div className="muted">#{ book.id }</div>
        <div>{ getDisplayDate(book.publishedAt) }</div>
      </div>
    </div>
  )
}

export default Book;

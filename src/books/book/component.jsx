import React from 'react';
import classNames from 'classnames';
import moment from 'moment';
import CONSTANTS from './../../constants';

import './style.css';

// todo: EXPORT THOSE FUCNTIONS

const getLastFridayForMonth = (monthAt) => {
  var lastDay = moment(monthAt).endOf('month').startOf('day');

  switch (lastDay.day()) {
    case 6: return lastDay.subtract(1, 'days');
    default: return lastDay.subtract(lastDay.day() + 2, 'days');
  }
}

const checkForHalloween = (timeAt) => {
  const dateAt = moment(timeAt);

  return dateAt.get('date') === 31 &&
         dateAt.get('month') === 9;
}

const checkForHorrorOnHalloween = (book) => {
  if (book.genre !== 'horror') { // todo: CONTSTANTS
    return false
  }

  if (!checkForHalloween(book.publishedAt)) {
    return false
  }

  return true;
}

const checkForFinanceOnMonthLastFriday = (book) => {
  if (book.genre !== 'finance') { // todo: CONSTANTS
    return false
  }

  const lastFridayAt = getLastFridayForMonth(book.publishedAt)
  const publishedAt = moment(book.publishedAt)

  if (!lastFridayAt.isSame(publishedAt, 'day')) {
    return false
  }

  return true
}

const getDisplayDate = (timeAt) => {
  return moment(timeAt).format('dddd Do of MMMM YYYY') // todo: CONSTANTS
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

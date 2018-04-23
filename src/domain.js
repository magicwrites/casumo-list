import _ from 'lodash';
import faker from 'faker';
import CONSTANTS from './constants'
import moment from 'moment'

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
  if (book.genre !== CONSTANTS.GENRES.HORROR) {
    return false
  }

  if (!checkForHalloween(book.publishedAt)) {
    return false
  }

  return true;
}

const checkForFinanceOnMonthLastFriday = (book) => {
  if (book.genre !== CONSTANTS.GENRES.FINANCE) {
    return false
  }

  const lastFridayAt = getLastFridayForMonth(book.publishedAt)
  const publishedAt = moment(book.publishedAt)

  if (!lastFridayAt.isSame(publishedAt, 'day')) {
    return false
  }

  return true
}

const randomizeBook = (x, i = 0) => ({
  id: i + 1,
  name: _.capitalize(faker.lorem.words()),
  publishedAt: faker.date.past(),
  genre: _.sample(_.values(CONSTANTS.GENRES)),
  author: {
    gender: Math.random() > 0.5 ? CONSTANTS.GENDERS.MALE : CONSTANTS.GENDERS.FEMALE,
    name: `${faker.name.firstName()} ${faker.name.lastName()}`
  }
});

const randomizeBooks = (amount) => _.range(amount).map(randomizeBook);

export { checkForFinanceOnMonthLastFriday, checkForHorrorOnHalloween, randomizeBook, randomizeBooks }

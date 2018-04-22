import _ from 'lodash';
import faker from 'faker';
import CONSTANTS from './../constants'

const randomizeBook = (x, i = 0) => ({
  id: i + 1,
  name: _.capitalize(faker.lorem.words()),
  publishedAt: faker.date.past(),
  genre: _.sample(CONSTANTS.BOOK.GENRES),
  author: {
    gender: Math.random() > 0.5 ? CONSTANTS.GENDERS.MALE : CONSTANTS.GENDERS.FEMALE,
    name: faker.name.findName()
  }
});

const randomizeBooks = (amount) => _.range(amount).map(randomizeBook);

export { randomizeBook, randomizeBooks }

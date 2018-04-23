/* eslint no-restricted-globals: 0 */

import _ from 'lodash';

import CONSTANTS from './../constants'
import { randomizeBook } from './../domain';

// info: I was wondering whether I should figure out a nice algorithm
//       to handle already sorted parts of the list, or whether I should
//       write something by hand, or use timsort or similar fancy solution.
//
//       In the end I decided to be honest, and not spend hours/days over
//       something I am mediocre at. It might not be worth it for this app.
//
//       So, lodash sort is at least providing one advantage I really value:
//
//       READABILITY :-)

const create = amount => _.range(amount).map(randomizeBook)
const sort = (books, path) => _.sortBy(books, path)

self.onmessage = event => {
  const { request, payload } = event.data

  if (request === CONSTANTS.WORKER.REQUESTS.ADD) {
    const { amount } = payload
    const books = create(amount)

    self.postMessage({ type: CONSTANTS.ACTIONS.EXTEND_LIST, payload: books })
  }

  if (request === CONSTANTS.WORKER.REQUESTS.SORT) {
    const { books, path } = payload
    const sorted = sort(books, path);

    self.postMessage({ type: CONSTANTS.ACTIONS.UPDATE_LIST, payload: sorted });
  }

  if (request === CONSTANTS.WORKER.REQUESTS.ADD_THEN_SORT) {
    const { amount, books, path } = payload
    const joined = [ ...books, ...create(amount) ]
    const sorted = sort(joined, path);

    self.postMessage({ type: CONSTANTS.ACTIONS.UPDATE_LIST, payload: sorted });
  }
}
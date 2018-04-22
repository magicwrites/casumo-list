/* eslint no-restricted-globals: 0 */

import _ from 'lodash';
import { randomizeBook } from './randomizer';

self.onmessage = event => {
  const { amount } = event.data;
  const books = _.range(amount).map(randomizeBook);

  self.postMessage(books);
}
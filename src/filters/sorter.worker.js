/* eslint no-restricted-globals: 0 */

import _ from 'lodash'

self.onmessage = event => {
  const { books, path } = event.data;
  const sorted = _.sortBy(books, path);

  self.postMessage(sorted);
}
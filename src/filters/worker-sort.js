// INFO: A bit of hacking here to avoid ejecting create-react-app and thus introducing a whole
//       bunch of boilerplate and configurations as a mandatory reading.
//
//       If webworker would require logic worth splitting into another module,
//       or the 'blobification' would require more than a few lines,
//       then I would probably ejected create-react-app and opted for workerize-loader usage.

/* eslint no-restricted-globals: 0 */

const workercode = () => {
  self.getProperty = (theObject, path, separator = '.') => {
    try {
      return path
        .split(separator)
        .reduce((obj, property) => obj[property], theObject);
    } catch (err) {
      return undefined;
    }
  }

  self.getSorter = path => (a, b) => {
    if (self.getProperty(a, path) < self.getProperty(b, path)) return -1;
    if (self.getProperty(a, path) > self.getProperty(b, path)) return 1;

    return 0;
  }

  self.onmessage = event => {
    const { books, path } = event.data;
    const sorted = books.sort(self.getSorter(path))

    self.postMessage(sorted);
  }
};

let code = workercode.toString();
code = code.substring(code.indexOf('{') + 1, code.lastIndexOf('}'));

const blob = new Blob([ code ], { type: 'application/javascript' });
const workerScript = URL.createObjectURL(blob);

export default workerScript
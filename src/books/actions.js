import CONSTANTS from './../constants'
import GeneratorWorker from './generator.worker.js';

const generatorWorker = new GeneratorWorker();

function update(books) {
  return {
    type: CONSTANTS.ACTIONS.BOOKS_UPDATE,
    payload: { books }
  };
}

function startGeneration(amount) {
  return {
    type: CONSTANTS.ACTIONS.BOOKS_GENERATION_START,
    payload: { amount }
  };
}

const generate = amount => dispatch => {
  dispatch(startGeneration(amount));

  generatorWorker.postMessage({ amount });
  generatorWorker.onmessage = (event) => {
    // dispatch(booksActions.update(event.data))
    console.log('generated', event.data);
  }
}

export default { update, generate };

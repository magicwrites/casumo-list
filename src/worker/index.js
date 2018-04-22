import Worker from './source.worker.js';
import actions from './../actions'

const instance = new Worker();

const postMessage = payload => {
  instance.postMessage(payload)
}

const connect = dispatch => {
  instance.onmessage = event => {
    dispatch(actions.updateList(event.data))
  }
}

export default { connect, postMessage }
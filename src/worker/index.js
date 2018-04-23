import Worker from './source.worker.js'
import actions from './../actions'
import CONSTANTS from './../constants'

const instance = new Worker();

const postMessage = payload => {
  instance.postMessage(payload)
}

const connect = dispatch => {
  instance.onmessage = event => {
    switch (event.data.type) {
      case CONSTANTS.ACTIONS.UPDATE_LIST:
        dispatch(actions.updateList(event.data.payload))
        break;
      case CONSTANTS.ACTIONS.EXTEND_LIST:
        dispatch(actions.extendList(event.data.payload))
        break;
      default:
        console.warn('wopsie, worker tries forbidden actions?')
    }
  }
}

export default { connect, postMessage }
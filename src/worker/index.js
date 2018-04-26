import Worker from './source.worker.js'
import actions from './../actions.base'
import CONSTANTS from './../constants'

const instance = new Worker()

const postMessage = payload => {
  instance.postMessage(payload)
}

// info: I did not have much experience with webworkers in the past, and
//       there might be a more fitting solution out there existing.
//
//       However, I needed a really simple connection between my app
//       and webworker, so I have crafted this `connect` in order to avoid
//       searching in a sea of libraries which I discovered along the way.
//
//       For a bigger app, I would probably did more exploration. For
//       a skill demo, I think this is fair.

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
        console.warn('wopsie, worker tries forbidden actions? should not happen.')
    }
  }
}

export default { connect, postMessage }
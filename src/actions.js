import CONSTANTS from './constants'
import worker from './worker'
import actionsBase from './actions.base'

const add = amount => dispatch => {
  dispatch(actionsBase.startAddition(amount));

  const payload = { amount }

  worker.postMessage({ payload, request: CONSTANTS.WORKER.REQUESTS.ADD })
}

const addThenSort = amount => (dispatch, getState) => {
  dispatch(actionsBase.startAddition(amount));

  const state = getState()
  const { books, filters } = state
  const payload = { amount, books, path: filters.sortBy }

  worker.postMessage({ payload, request: CONSTANTS.WORKER.REQUESTS.ADD_THEN_SORT })
}

const sort = path => (dispatch, getState) => {
  dispatch(actionsBase.startSorting(path));

  const state = getState()
  const { books } = state
  const payload = { books, path }

  worker.postMessage({ payload, request: CONSTANTS.WORKER.REQUESTS.SORT })
}

export default { ...actionsBase, add, sort, addThenSort };

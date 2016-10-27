import {set} from 'object-path-immutable'
// defines a single 'segment' of the application state
// along with it's PATH in applciation state

// each *State.js file should define PATH, initialState and setInitialState functions

// path is an array handled by getIn / setIn (or lodash's get/set)
export const PATH_COUNTERS = ['counters']

export const initialState = {
  1: {
    value: 0,
  },
  2: {
    value: 0,
  },
}

export const setInitialExampleState = (state) =>
  set(state, PATH_COUNTERS, initialState)

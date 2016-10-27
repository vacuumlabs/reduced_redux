import { Promise } from 'bluebird'

import { PATH_COUNTERS } from '../state/exampleState'

// actions on a single segment of state should be grouped in a single file
// with name corresponding to the it's *State.js file

// reducer is either function 'extracted' from the typical reducer switch-case
// or an async action that'll be handled by thunk

// increments the counter by value
// payload is there mostly for logging purposes
export const updateCounter = (id, cnt) => ({
  type: 'increment',
  path: [...PATH_COUNTERS, id],
  payload: { cnt },
  reducer: (state, {cnt}) => ({
    value: state.value + cnt,
  }),
})

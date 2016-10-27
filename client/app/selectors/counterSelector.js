import {get} from 'lodash'

import {PATH_COUNTERS} from '../state/counterState'

export const counterSelector = (state, id) => {
  return get(state, [...PATH_COUNTERS, id, 'value'])
}
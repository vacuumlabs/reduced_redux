import {
  forwardReducerTo,
  compose,
} from './utils/helpers'
import { setInitialCounterState } from './state/counterState'

const getInitialState = () => compose(
  setInitialCounterState,
)({})

const rootReducer = (state = getInitialState(), action) => {
  if (!action.reducer) return state // fallback for actions from different sources
  return forwardReducerTo(action.reducer, action.path)(state, action.payload)
}

export default rootReducer

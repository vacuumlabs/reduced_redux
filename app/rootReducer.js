import {
  forwardReducerTo,
  compose,
} from './utils/helpers'
import { setInitialExampleState } from './state/exampleState'

const getInitialState = () => compose(
  setInitialExampleState,
)({})

const rootReducer = (state = getInitialState(), action) => {
  console.log(state)
  console.log(getInitialState())
  if (!action.reducer) return state // fallback for actions from different sources
  return forwardReducerTo(action.reducer, action.path)(state, action.payload)
}

export default rootReducer

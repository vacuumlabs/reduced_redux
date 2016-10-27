import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const enhancer = applyMiddleware(thunk)

export default function configureStore(initialState) {
  return createStore(_ => null, initialState, enhancer)
}

import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from '../rootReducer'

const logger = createLogger({
  level: 'info',
  collapsed: true,
})

const enhancer = compose(
  applyMiddleware(thunk, logger),
)

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer)

  if (module.hot) {
    module.hot.accept('../rootReducer', () =>
      store.replaceReducer(rootReducer) // eslint-disable-line global-require
    )
  }

  return store
}
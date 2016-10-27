import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Root from './components/Root'
import configureStore from './store/configureStore'
import './app.global.css'

const store = configureStore()

render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
)

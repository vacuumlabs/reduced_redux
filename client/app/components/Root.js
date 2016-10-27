import React, {Component} from 'react'
import {Provider} from 'react-redux'

import Example from './Example'


export default class Root extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <Example />
      </Provider>
    )
  }
}

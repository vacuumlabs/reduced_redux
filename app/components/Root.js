import React, {Component} from 'react'

import Example from './Example'

import styles from './styles/Root.css'

export default class Root extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Example />
      </div>
    )
  }
}

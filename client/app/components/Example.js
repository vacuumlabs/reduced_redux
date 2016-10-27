import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  updateCounter,
} from '../actions/counterActions'
import {counterSelector} from '../selectors/counterSelector'

const _Counter = ({value, increment}) =>
  <div>
    {`${value} `}
    <button onClick={increment}>
      Increment
    </button>
  </div>

const Counter = connect(
  (state, {id}) => ({
    value: counterSelector(state, id),
  }),
  (dispatch, {id}) =>
    bindActionCreators({
      increment: () => updateCounter(id, 1),
    }, dispatch)
)(_Counter)


const Example = ({one, two, updateCounter}) => {
  return (
    <div>
      <Counter id={1} />
      <Counter id={2} />
    </div>
  )
}

export default Example

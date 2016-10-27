import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
//import bindClosures from 'react-bind-closures'
import {
  updateCounter,
  asyncCounter,
} from '../actions/exampleActions'
import {
  counterSelector,
  doubleCounterSelector,
} from '../selectors/exampleSelectors'

const Example = ({one, two, updateCounter}) => {
  return (
    <div>
      {`${one} ${two}`}
      <button onClick={() => updateCounter(1, 1)}>
        one
      </button>
      <button onClick={() => updateCounter(2, 1)}>
        two
      </button>
    </div>
  )
}

export default connect(
  (state) => ({
    one: state.counters[1].value,
    two: state.counters[2].value,
  }),
  (dispatch) =>
    bindActionCreators({
      updateCounter,
    }, dispatch)
)(Example)

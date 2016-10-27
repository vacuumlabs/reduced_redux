'use strict';

import React from 'react';
import { render } from 'react-dom';
import configureStore from './app/store/configureStore'

import Root from 'app/components/Root'

const store = configureStore()
console.log(store)

render(<Root store={store}/>, document.getElementById('js-main'));

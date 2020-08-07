/* istanbul ignore file */

import rootReducer from './reducer'
import { createStore, applyMiddleware } from 'redux'
import { createWrapper } from 'next-redux-wrapper'
import thunkMiddleware from 'redux-thunk'

const bindMiddleware = (middleware) => {
  return applyMiddleware(...middleware)
}

const makeStore = () =>
  createStore(rootReducer, bindMiddleware([thunkMiddleware]))

export const wrapper = createWrapper(makeStore, { debug: true })

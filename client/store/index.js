import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import auth from './auth'
import productsReducer from './all-products'
import singleProductReducer from './single-product'
import cartReducer from './cart'
import allUserReducer from './all-users'

const reducer = combineReducers({
  auth,
  productsReducer,
  singleProductReducer,
  cartReducer,
  allUserReducer,
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './auth'

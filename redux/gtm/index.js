import {
  addToCart,
  dataLayer,
  purchase,
  removeFromCart,
  viewCart,
} from './events'

export * from './utils'

const gtmMiddleware = (store) => (next) => (action) => {
  const result =  next(action)
  const state = store.getState()

  addToCart(state, action)
  purchase(state, action)
  removeFromCart(state, action)
  viewCart(state, action)

  return result
}

export default gtmMiddleware

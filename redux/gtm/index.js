import TagManager from 'react-gtm-module'
import {
  addToCart,
  purchase,
  removeFromCart,
  viewCart,
} from './events'

export const initializeGTM = (store) => {
  if (!process.env.NEXT_PUBLIC_GTM_ID) {
    return
  }
  TagManager.initialize({
    gtmId: process.env.NEXT_PUBLIC_GTM_ID,
    auth: process.env.NEXT_PUBLIC_GTM_AUTH,
    preview: process.env.NEXT_PUBLIC_GTM_PREVIEW,
  })
}

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

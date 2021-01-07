import { configureStore } from '@reduxjs/toolkit'
import cart from './cart'
import itemsById from './itemsById'
import scrollTo from './scrollTo'

export default configureStore({
  reducer: {
    cart,
    itemsById,
    scrollTo,
  },
})

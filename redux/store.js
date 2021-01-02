import { configureStore } from '@reduxjs/toolkit'
import cart from './cart'
import itemsById from './itemsById'

export default configureStore({
  reducer: {
    cart,
    itemsById,
  },
})

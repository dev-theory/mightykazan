import { configureStore } from '@reduxjs/toolkit'
import app from './app'
import cart from './cart'
import gtm from './gtm'
import itemsById from './itemsById'

export default configureStore({
  reducer: {
    app,
    cart,
    itemsById,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(gtm),
})

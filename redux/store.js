import { configureStore } from "@reduxjs/toolkit"
import axios from "axios"
import app from "./app"
import cart from "./cart"
import gtm from "./gtm"
import itemsById from "./itemsById"

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    accept: "application/json",
    "content-type": "application/json",
  },
})

export default configureStore({
  reducer: {
    app,
    cart,
    itemsById,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: { extraArgument: api } }).concat(gtm),
})

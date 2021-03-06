import { createSelector } from "@reduxjs/toolkit"
import { dataLayer } from "../../lib/gtm"
import { itemByIdSelector } from "../itemsById"
import {
  cartIdSelector,
  itemQuantitySelector,
  itemsListSelector,
  taxesAmountSelector,
  totalAmountSelector,
} from "../cart"

const affiliation = "Mighty Kazan"
const currency = "CAD"

const ecommerceItem = (item) => ({
  item_id: item.id,
  affiliation,
  currency,
  item_name: item.name,
  price: item.price,
})

const itemsInCartSelector = createSelector(
  (state) => state,
  itemsListSelector,
  (state, itemsList) =>
    itemsList.map((id) => ({
      ...ecommerceItem(itemByIdSelector(state, id)),
      quantity: itemQuantitySelector(state, id),
    }))
)

export function addToCart(state, action) {
  if (action.type === "cart/addItem") {
    dataLayer({
      event: "add_to_cart",
      ecommerce: {
        items: itemsInCartSelector(state),
      },
    })
  }
}

export function purchase(state, action) {
  if (action.type === "app/showScreen" && action.payload === "/checkout") {
    dataLayer({
      event: "purchase",
      ecommerce: {
        transaction_id: cartIdSelector(state),
        affiliation,
        currency,
        items: itemsInCartSelector(state),
        tax: taxesAmountSelector(state),
        value: totalAmountSelector(state),
      },
    })
  }
}

export function removeFromCart(state, action) {
  if (action.type === "cart/removeItem") {
    dataLayer({
      event: "remove_from_cart",
      ecommerce: {
        items: itemsInCartSelector(state),
      },
    })
  }
}

export function viewCart(state, action) {
  if (action.type === "app/showScreen" && action.payload === "/shopping-bag") {
    dataLayer({
      event: "view_cart",
      ecommerce: {
        items: itemsInCartSelector(state),
      },
    })
  }
}

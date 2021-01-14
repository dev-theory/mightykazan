import { createSelector } from '@reduxjs/toolkit'
import TagManager from 'react-gtm-module'
import { itemByIdSelector } from '../itemsById'
import {
  cartIdSelector,
  itemCountSelector,
  itemsListSelector,
  taxesAmountSelector,
  totalAmountSelector,
} from '../cart'
import { dataLayer } from './utils'

const affiliation = 'Mighty Kazan'
const currency = 'CAD'

const ecommerceItem = (item) => ({
  item_id: item.id,
  affiliation,
  currency,
  item_name: item.name,
  price: item.price,
})

export const itemsInCart = createSelector(
  state => state,
  itemsListSelector,
  (state, itemsList) => itemsList.map(id => ({
    ...ecommerceItem(
      itemByIdSelector(state, id)
    ),
    quantity: itemCountSelector(state, id),
  }))
)

export function addToCart(state, action) {
  if (action.type === 'cart/addItem') {
    dataLayer({
      event: 'add_to_cart',
      ecommerce: {
        items: itemsInCart(state),
      },
    })
  }
}

export function purchase(state, action) {
  if (action.type === 'app/showScreen' && action.payload === '/checkout') {
    dataLayer({
      event: 'purchase',
      ecommerce: {
        transaction_id: cartIdSelector(state),
        affiliation,
        currency,
        items: itemsInCart(state),
        tax: taxesAmountSelector(state),
        value: totalAmountSelector(state),
      },
    })
  }
}

export function removeFromCart(state, action) {
  if (action.type === 'cart/removeItem') {
    dataLayer({
      event: 'remove_from_cart',
      ecommerce: {
        items: itemsInCart(state),
      },
    })
  }
}

export function viewCart(state, action) {
  if (action.type === 'app/showScreen' && action.payload === '/shopping-bag') {
    dataLayer({
      event: 'view_cart',
      ecommerce: {
        items: itemsInCart(state),
      },
    })
  }
}

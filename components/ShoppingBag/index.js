import Slide from '@material-ui/core/Slide'
import Typography from '@material-ui/core/Typography'
import { useDispatch, useSelector } from 'react-redux'
import {
  isShoppingBagOpenSelector,
  showCheckout
} from '../../redux/app'
import {
  checkout,
  checkoutInProgressSelector,
  itemsListSelector,
  subtotalAmountSelector,
  taxesAmountSelector,
  totalAmountSelector
} from '../../redux/cart'
import ProgressButton from '../ProgressButton'
import ShoppingBagItem from '../ShoppingBagItem'
import { useStyles } from './styles'

const checkoutCart = () => (dispatch, getState, apis) => {
  dispatch(checkout(false))
  dispatch(showCheckout())
}

export default function ShoppingBag(props) {
  const classes = useStyles(props)
  const dispatch = useDispatch()
  const open = useSelector(isShoppingBagOpenSelector)
  const items = useSelector(itemsListSelector)
  const subtotalAmount = useSelector(subtotalAmountSelector)
  const taxesAmount = useSelector(taxesAmountSelector)
  const totalAmount = useSelector(totalAmountSelector)
  const checkoutInProgress = useSelector(checkoutInProgressSelector)
  const onCheckoutClick = () => dispatch(checkoutCart())
  return (
    <Slide in={open} direction="left">
      <div className={classes.root}>
        <Typography variant="h6" className={classes.title}>Your Order</Typography>
        {items.length === 0 ? (
        <div className={classes.container}>
          <Typography variant="body1">Your shopping bag is empty</Typography>
        </div>
        ) : (<>
        <div className={classes.container}>
          {items.map(id => <ShoppingBagItem id={id} key={`item-${id}`} />)}
          <div className={classes.subtotalRow}>
            <Typography variant="h6" className={classes.amountLabel}>Subtotal:</Typography>
            <Typography variant="h6" className={classes.amount}>${subtotalAmount} <Typography component="span" variant="body2">{props.currency ? props.currency : 'CAD'}</Typography></Typography>
          </div>
          <div className={classes.taxesRow}>
            <Typography variant="h6" className={classes.amountLabel}>GST/HST:</Typography>
            <Typography variant="h6" className={classes.amount}>${taxesAmount} <Typography component="span" variant="body2">{props.currency ? props.currency : 'CAD'}</Typography></Typography>
          </div>
          <div className={classes.totalAmountRow}>
            <Typography variant="h6" className={`${classes.amountLabel} ${classes.totalAmountLabel}`}>Total:</Typography>
            <Typography variant="h6" className={`${classes.amount} ${classes.totalAmount}`}>${totalAmount} <Typography component="span" variant="body2">{props.currency ? props.currency : 'CAD'}</Typography></Typography>
          </div>
        </div>
        <div className={classes.footer}>
          <ProgressButton
            variant="outlined"
            className={classes.checkoutButton}
            inProgress={checkoutInProgress}
            onClick={onCheckoutClick}>
            Checkout
          </ProgressButton>
        </div>
        </>)}
      </div>
    </Slide>
  )
}

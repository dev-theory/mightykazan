import Button from '@material-ui/core/Button'
import Slide from '@material-ui/core/Slide'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { itemsListSelector, totalAmountSelector } from '../../redux/cart'
import ShoppingBagItem from '../ShoppingBagItem'
import { useStyles } from './styles'

export default function ShoppingBag(props) {
  const classes = useStyles(props)
  const items = useSelector(itemsListSelector)
  const totalAmount = useSelector(totalAmountSelector)
  return (
    <Slide in={props.open} direction="left">
      <div className={classes.root}>
        <Typography variant="h6" className={classes.title}>Your Order</Typography>
        <div className={classes.container}>
          {items.length === 0 && (
            <Typography variant="body1">Your shopping bag is empty</Typography>
          )}
          {items.map(id => <ShoppingBagItem id={id} key={`item-${id}`} />)}
          <div className={classes.totalAmountRow}>
            <Typography variant="h6" className={classes.totalAmountLabel}>Total:</Typography>
            <Typography variant="h6" className={classes.totalAmount}>${totalAmount} <Typography component="span" variant="body2">{props.currency ? props.currency : 'CAD'}</Typography></Typography>
          </div>
        </div>
        <div className={classes.footer}>
          <Button variant="outlined" className={classes.checkoutButton}>Checkout</Button>
        </div>
      </div>
    </Slide>
  )
}

ShoppingBag.propTypes = {
  open: PropTypes.bool.isRequired,
}

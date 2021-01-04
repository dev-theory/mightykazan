import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, itemCountSelector, itemSubtotalSelector, removeItem } from '../../redux/cart'
import { itemByIdSelector } from '../../redux/itemsById'
import Counter from '../Counter'
import { useStyles } from './styles'

export default function ShoppingBagItem(props) {
  const classes = useStyles(props)
  const { id } = props
  const dispatch = useDispatch()
  const item = useSelector(state => itemByIdSelector(state, id))
  const count = useSelector(state => itemCountSelector(state, id))
  const subtotal = useSelector(state => itemSubtotalSelector(state, id))
  const handleCountChange = (value) => {
    if (value > count) {
      dispatch(addItem(item))
    } else {
      dispatch(removeItem(item))
    }
  }
  return (
    <div className={classes.root}>
      <div className={classes.nameRow}>
        <Typography variant="h6" className={classes.name}>{item.name}</Typography>
      </div>
      <div className={classes.container}>
        <Counter value={count} minValue={1} onChange={handleCountChange} />
        <Typography variant="body1" className={classes.qty}>
          x ${item.price}
        </Typography>
        <Typography variant="body1" className={classes.price}>
          ${subtotal}
        </Typography>
      </div>
    </div>
  )
}

ShoppingBagItem.propTypes = {
  id: PropTypes.string.isRequired,
}

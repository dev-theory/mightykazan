import Badge from '@material-ui/core/Badge'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import ShoppingBagIcon from '@material-ui/icons/LocalMall'
import Tooltip from '@material-ui/core/Tooltip'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { animated } from 'react-spring'
import {
  isShoppingBagOpenSelector,
  showHome,
  showShoppingBag,
} from '../../redux/app'
import { totalNumberOfItemsSelector } from '../../redux/cart'
import { useAnimatedStyles, useStyles } from './styles'

const AnimatedIconButton = animated(IconButton)

export default function ShoppingBagButton(props) {
  const classes = useStyles(props)
  const dispatch = useDispatch()
  const isShoppingBagOpen = useSelector(isShoppingBagOpenSelector)
  const totalNumberOfItemsInCart = useSelector(totalNumberOfItemsSelector)
  const showShoppingBagButton = totalNumberOfItemsInCart > 0
  const [ showTooltip, setShowTooltip ] = useState(false)

  const toggleShoppingBag = () => {
    dispatch(isShoppingBagOpen ? showHome() : showShoppingBag())
  }


  useEffect(() => {
    showShoppingBagButton && setShowTooltip(true)
    const timeoutId = setTimeout(() => setShowTooltip(false), 3000)
    return () => clearTimeout(timeoutId)
  }, [ showShoppingBagButton, totalNumberOfItemsInCart ])
  const shoppingBagStyles = useAnimatedStyles(showTooltip)

  return showShoppingBagButton ? (
    <Tooltip
      classes={{ tooltipPlacementLeft: classes.tooltipPlacementLeft }}
      title="Checkout your order here"
      open={showTooltip && !isShoppingBagOpen}
      arrow
      disableFocusListener
      disableHoverListener
      disableTouchListener
      placement="left">
      <AnimatedIconButton
        aria-label="shopping cart"
        style={shoppingBagStyles}
        onClick={toggleShoppingBag}>
        <Badge badgeContent={totalNumberOfItemsInCart} color="secondary">
          <ShoppingBagIcon />
        </Badge>
      </AnimatedIconButton>
    </Tooltip>
  ) : isShoppingBagOpen && (
    <IconButton edge="start" aria-label="menu" onClick={toggleShoppingBag}>
      <CloseIcon />
    </IconButton>
  )
}

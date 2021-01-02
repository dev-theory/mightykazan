import Badge from '@material-ui/core/Badge'
import Fade from '@material-ui/core/Fade'
import IconButton from '@material-ui/core/IconButton'
import ShoppingBagIcon from '@material-ui/icons/LocalMall'
import Tooltip from '@material-ui/core/Tooltip'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { animated } from 'react-spring'
import { totalNumberOfItemsSelector } from '../../redux/cart'
import { useAnimatedStyles, useStyles } from './styles'

const AnimatedIconButton = animated(IconButton)

export default function ShoppingBagButton(props) {
  const classes = useStyles()
  const totalNumberOfItemsInCart = useSelector(totalNumberOfItemsSelector)
  const showShoppingBag = totalNumberOfItemsInCart > 0
  const [ showTooltip, setShowTooltip ] = useState(false)
  useEffect(() => {
    showShoppingBag && setShowTooltip(true)
    const timeoutId = setTimeout(() => setShowTooltip(false), 3000)
    return () => clearTimeout(timeoutId)
  }, [ showShoppingBag, totalNumberOfItemsInCart ])
  const shoppingBagStyles = useAnimatedStyles(showTooltip)

  return showShoppingBag && (
    <Tooltip
      classes={{ tooltipPlacementLeft: classes.tooltipPlacementLeft }}
      title="Checkout your order here"
      open={showTooltip}
      arrow
      disableFocusListener
      disableHoverListener
      disableTouchListener
      placement="left">
      <AnimatedIconButton
        aria-label="shopping cart"
        style={shoppingBagStyles}>
        <Badge badgeContent={totalNumberOfItemsInCart} color="secondary">
          <ShoppingBagIcon />
        </Badge>
      </AnimatedIconButton>
    </Tooltip>
  )
}

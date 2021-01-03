import Badge from '@material-ui/core/Badge'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import ShoppingBagIcon from '@material-ui/icons/LocalMall'
import Tooltip from '@material-ui/core/Tooltip'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { animated } from 'react-spring'
import { totalNumberOfItemsSelector } from '../../redux/cart'
import { useAnimatedStyles, useStyles } from './styles'

const AnimatedIconButton = animated(IconButton)

export default function ShoppingBagButton(props) {
  const classes = useStyles()
  const { isShoppingBagOpen = false } = props
  const totalNumberOfItemsInCart = useSelector(totalNumberOfItemsSelector)
  const showShoppingBagButton = totalNumberOfItemsInCart > 0
  const [ showTooltip, setShowTooltip ] = useState(false)
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
        onClick={props.onClick}>
        <Badge badgeContent={totalNumberOfItemsInCart} color="secondary">
          <ShoppingBagIcon />
        </Badge>
      </AnimatedIconButton>
    </Tooltip>
  ) : isShoppingBagOpen && (
    <IconButton edge="start" aria-label="menu" onClick={props.onClick}>
      <CloseIcon />
    </IconButton>
  )
}

ShoppingBagButton.propTypes = {
  isShoppingBagOpen: PropTypes.bool,
  onClick: PropTypes.func,
}

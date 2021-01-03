import MuiAppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import Toolbar from '@material-ui/core/Toolbar'
import CloseIcon from '@material-ui/icons/Close'
import MenuIcon from '@material-ui/icons/Menu'
import PropTypes from 'prop-types'
import { useState } from 'react'
import Menu from '../Menu'
import ShoppingBag from '../ShoppingBag'
import ShoppingBagButton from '../ShoppingBagButton'
import { useStyles } from './styles'

export default function AppBar(props) {
  const classes = useStyles(props)
  const { onMenuItemClick } = props
  const [ isMenuOpen, setMenuOpen ] = useState(false)
  const [ isShoppingBagOpen, setShoppingBagOpen ] = useState(false)
  const toggleMenu = () => {
    setShoppingBagOpen(false)
    setMenuOpen(!isMenuOpen)
  }
  const toggleShoppingBag = () => {
    setMenuOpen(false)
    setShoppingBagOpen(!isShoppingBagOpen)
  }
  return (
    <>
      <MuiAppBar position="fixed" color="transparent" elevation={0}>
        <Toolbar>
          <IconButton edge="start" aria-label="menu" onClick={toggleMenu}>
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          <div className={classes.appBarSpacer}> </div>
          <ShoppingBagButton
            onClick={toggleShoppingBag}
            isShoppingBagOpen={isShoppingBagOpen} />
        </Toolbar>
      </MuiAppBar>

      <Menu
        open={isMenuOpen}
        onMenuItemClick={onMenuItemClick}
        onMenuClose={toggleMenu} />

      <ShoppingBag open={isShoppingBagOpen} />
    </>
  )
}

AppBar.propTypes = {
  onMenuItemClick: PropTypes.func,
}

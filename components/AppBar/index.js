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
  const rootClasses = `${classes.root} ${(isMenuOpen || isShoppingBagOpen) ? classes.nonHomePage : ''}`
  return (
    <>
      <MuiAppBar position="fixed" color="transparent" elevation={0} className={rootClasses}>
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
        onMenuClose={toggleMenu} />

      <ShoppingBag open={isShoppingBagOpen} />
    </>
  )
}

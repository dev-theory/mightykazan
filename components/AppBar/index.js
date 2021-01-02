import MuiAppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import Toolbar from '@material-ui/core/Toolbar'
import CloseIcon from '@material-ui/icons/Close'
import MenuIcon from '@material-ui/icons/Menu'
import { useState } from 'react'
import Menu from '../Menu'
import ShoppingBagButton from '../ShoppingBagButton'
import { useStyles } from './styles'

export default function AppBar(props) {
  const classes = useStyles(props)
  const [ isMenuOpen, setMenuOpen ] = useState(false)
  const handleMenuClose = () => setMenuOpen(false)
  const toggleMenu = () => setMenuOpen(!isMenuOpen)
  return (
    <>
      <MuiAppBar position="fixed" color="transparent" elevation={0}>
        <Toolbar>
          <IconButton edge="start" aria-label="menu" onClick={toggleMenu}>
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          <div className={classes.appBarSpacer}> </div>
          <ShoppingBagButton />
        </Toolbar>
      </MuiAppBar>

      <Menu
        open={isMenuOpen}
        onMenuItemClick={props.onMenuItemClick}
        onMenuClose={handleMenuClose} />
    </>
  )
}

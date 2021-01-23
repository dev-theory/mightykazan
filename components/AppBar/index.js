import MuiAppBar from "@material-ui/core/AppBar"
import IconButton from "@material-ui/core/IconButton"
import Toolbar from "@material-ui/core/Toolbar"
import CloseIcon from "@material-ui/icons/Close"
import MenuIcon from "@material-ui/icons/Menu"
import { useDispatch, useSelector } from "react-redux"
import {
  isHomeOpenSelector,
  isMenuOpenSelector,
  showHome,
  showMenu,
} from "../../redux/app"
import Checkout from "../Checkout"
import Menu from "../Menu"
import ShoppingBag from "../ShoppingBag"
import ShoppingBagButton from "../ShoppingBagButton"
import { useStyles } from "./styles"

export default function AppBar(props) {
  const classes = useStyles(props)
  const dispatch = useDispatch()
  const isHomeOpen = useSelector(isHomeOpenSelector)
  const isMenuOpen = useSelector(isMenuOpenSelector)
  const toggleMenu = () => {
    dispatch(isMenuOpen ? showHome() : showMenu())
  }
  const rootClasses = `${classes.root} ${isHomeOpen ? "" : classes.nonHomePage}`
  return (
    <>
      <MuiAppBar
        position="fixed"
        color="transparent"
        elevation={0}
        className={rootClasses}
      >
        <Toolbar>
          <IconButton edge="start" aria-label="menu" onClick={toggleMenu}>
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          <div className={classes.appBarSpacer}> </div>
          <ShoppingBagButton />
        </Toolbar>
      </MuiAppBar>

      <Menu />
      <ShoppingBag />
      <Checkout />
    </>
  )
}

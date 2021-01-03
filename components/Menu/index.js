import Divider from '@material-ui/core/Divider'
import MenuItem from '@material-ui/core/MenuItem'
import PropTypes from 'prop-types'
import Slide from '@material-ui/core/Slide'
import Typography from '@material-ui/core/Typography'
import { useStyles } from './styles'

export default function Menu(props) {
  const classes = useStyles()
  const navigateTo = (sectionIndex) => {
    props.onMenuItemClick({ sectionIndex, direction: true })
    props.onMenuClose()
  }
  const navigateToNomadsJoy = () => navigateTo(0)
  const navigateToChickenPlov = () => navigateTo(1)
  const navigateToAbout = () => navigateTo(2)
  return (
    <Slide in={props.open} direction="right">
      <div className={classes.root}>
        <div className={classes.container}>
          <img className={classes.logo} src="/images/mightykazan-logo-brand-white.png" />
          <Divider className={classes.divider} />
          <MenuItem className={classes.menuItem} onClick={navigateToNomadsJoy}>Nomad's Joy</MenuItem>
          <Divider className={classes.divider} />
          <MenuItem className={classes.menuItem} onClick={navigateToChickenPlov}>Chick-n-Grains</MenuItem>
          <Divider className={classes.divider} />
          <MenuItem className={classes.menuItem} onClick={navigateToAbout}>About</MenuItem>
        </div>
        <div className={classes.footer}>
        <Typography variant="subtitle2">© {new Date().getFullYear()} Mighty Kazan</Typography>
        <Typography variant="subtitle2">built by <a className={classes.devTheory} href="https://devtheory.com">DevTheory Inc.</a></Typography>
        </div>
      </div>
    </Slide>
  )
}

Menu.propTypes = {
  onMenuClose: PropTypes.func,
  onMenuItemClick: PropTypes.func,
  open: PropTypes.bool.isRequired,
}

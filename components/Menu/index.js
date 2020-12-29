import Divider from '@material-ui/core/Divider'
import MenuItem from '@material-ui/core/MenuItem'
import PropTypes from 'prop-types'
import Slide from '@material-ui/core/Slide'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    position: 'absolute',
    backgroundColor: 'rgba(66,66,69,0.95)',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: '100%',
    zIndex: 999,
    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'column',
    padding: '16px',
  },
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'normal',
    textAlign: 'center',
  },
  devTheory: {
    textDecoration: 'underline',
    fontWeight: 'bold',
  },
  divider: {
    width: '150px',
    margin: '0.7rem auto',
  },
  logo: {
    userSelect: 'none',
    width: '160px',
    margin: '0 auto 1rem auto',
  },
  menuItem :{
    width: '100%',
    fontSize: '2em',
    justifyContent: 'center',
  },
  footer: {
  },
}))

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

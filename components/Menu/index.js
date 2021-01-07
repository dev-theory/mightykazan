import Divider from '@material-ui/core/Divider'
import MenuItem from '@material-ui/core/MenuItem'
import PropTypes from 'prop-types'
import Slide from '@material-ui/core/Slide'
import Typography from '@material-ui/core/Typography'
import { useDispatch } from 'react-redux'
import { animated, useSpring } from 'react-spring'
import { scrollTo } from '../../redux/scrollTo'
import { useStyles } from './styles'

export default function Menu(props) {
  const classes = useStyles()
  const dispatch = useDispatch()

  const navigateTo = (sectionIndex) => {
    const sectionOffsetTop = document.querySelector(sectionIndex).offsetTop
    dispatch(scrollTo(sectionOffsetTop))
    props.onMenuClose()
  }
  const navigateToNomadsJoy = () => navigateTo('#section-1')
  const navigateToChickenPlov = () => navigateTo('#section-2')
  const navigateToAbout = () => navigateTo('#section-about')

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
  open: PropTypes.bool.isRequired,
}

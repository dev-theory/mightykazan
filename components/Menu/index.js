import Divider from '@material-ui/core/Divider'
import MenuItem from '@material-ui/core/MenuItem'
import Slide from '@material-ui/core/Slide'
import Typography from '@material-ui/core/Typography'
import { useDispatch, useSelector } from 'react-redux'
import { isMenuOpenSelector, scrollTo } from '../../redux/app'
import { useStyles } from './styles'

export default function Menu(props) {
  const classes = useStyles(props)
  const dispatch = useDispatch()
  const open = useSelector(isMenuOpenSelector)

  const navigateTo = (sectionIndex) => {
    const sectionOffsetTop = document.querySelector(sectionIndex).offsetTop
    dispatch(scrollTo(sectionOffsetTop))
  }
  const navigateToNomadsJoy = () => navigateTo('#section-1')
  const navigateToChickenPlov = () => navigateTo('#section-2')
  const navigateToAbout = () => navigateTo('#section-about')

  return (
    <Slide in={open} direction="right">
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

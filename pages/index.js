import AppBar from '@material-ui/core/AppBar'
import Badge from '@material-ui/core/Badge'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import MenuIcon from '@material-ui/icons/Menu'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartOutlined'
import { useCallback, useState } from 'react'
import { animated, useSpring, useTransition } from 'react-spring'
import { useGesture } from 'react-use-gesture'
import AboutUs from '../components/AboutUs'
import ChickenPlov from '../components/ChickenPlov'
import Logo from '../components/Logo'
import NomadsJoy from '../components/NomadsJoy'
import ScrollIndicator from '../components/ScrollIndicator'

const useStyles = makeStyles(theme => ({
  root: {
  },
  container: {
    height: '100vh',
  },
  appBarSpacer: {
    flexGrow: 1,
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    'object-fit': 'cover',
    zIndex: -999,
    height: '100%',
    width: '100%',
  },
  videoOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    zIndex: -998,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
}))

const screens = [
  animated(NomadsJoy),
  animated(ChickenPlov),
  animated(AboutUs),
]

export default function Home() {
  const [ { screenIndex, direction }, setScreen ] = useState({ screenIndex: 0, direction: true })
  const classes = useStyles()

  const turnScreen = (direction = true) => {
    const step = (direction ? 1 : 2)
    setScreen(({ screenIndex }) => ({
      screenIndex: (screenIndex + step) % 3,
      direction
    }))
  }

  const projection = velocity => (velocity * 0.998) / (1 - 0.998)

  const bind = useGesture({
    onDragEnd: (({ movement: [ x, y ] }) => {
      if (Math.abs(y) > 150) {
        turnScreen(y < 0)
      }
    }),
    onWheelStart: ({ ctrlKey, direction: [ x, y ], ...rest }) => {
      if (!ctrlKey) {
        turnScreen(y > 0)
      }
    },
  })

  const transitions = useTransition(screenIndex, (p) => p, {
    from: { opacity: 0, transform: `translate3d(0,${direction?'100%':'-100%'},0)` },
    enter: [
      { opacity: 0, transform: `translate3d(0,${direction?'90%':'-90%'},0)` },
      { opacity: 1, transform: `translate3d(0,0,0)` },
    ],
    leave: { opacity: 0, transform: `translate3d(0,${direction?'-50%':'50%'},0)` },
  })

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="transparent" elevation={0}>
        <Toolbar>
          <IconButton edge="start" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <div className={classes.appBarSpacer}> </div>
          <IconButton aria-label="shopping cart">
            <Badge badgeContent={2} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>

      <Grid container
            justify="center"
            alignItems="center"
            className={classes.container}
            {...bind()}>
        {
        transitions.map(({ item, props, key }) => {
          const Screen = screens[item]
          return (
            <Screen key={key} style={props} />
          )
          })
        }
        {

        }
        <ScrollIndicator />
      </Grid>

      <video autoPlay={true} playsInline={true} loop={true} muted={true} className={classes.video}>
        <source src="/media/pilaf-1080p.webm" type="video/webm" />
        <source src="/media/pilaf-1080p.mp4" type="video/mp4" />
        <source src="/media/pilaf-1080p.flv" type="video/flv" />
        <source src="/media/pilaf-1080p.ogg" type="video/ogg" />
      </video>
      <div className={classes.videoOverlay}> </div>

    </div>
  )
}

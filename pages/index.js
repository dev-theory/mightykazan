import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { useState } from 'react'
import { animated, useTransition } from 'react-spring'
import { useGesture } from 'react-use-gesture'
import About from '../components/About'
import AppBar from '../components/AppBar'
import ChickenPlov from '../components/ChickenPlov'
import NomadsJoy from '../components/NomadsJoy'
import ScrollIndicator from '../components/ScrollIndicator'
import SplashScreen from '../components/SplashScreen'

const useStyles = makeStyles(theme => ({
  root: {
  },
  container: {
    height: '100vh',
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
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    zIndex: -998,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
}))

const sections = [
  animated(NomadsJoy),
  animated(ChickenPlov),
  animated(About),
]

export default function Home(props) {
  const classes = useStyles()
  const [ { sectionIndex, direction }, setSection ] = useState({ sectionIndex: 0, direction: true })
  const [ isVideoLoaded, setVideoLoaded ] = useState(false)

  const goToSection = (direction = true) => {
    const step = (direction ? 1 : (sections.length-1))
    setSection(({ sectionIndex }) => ({
      sectionIndex: (sectionIndex + step) % sections.length,
      direction
    }))
  }

  const bind = useGesture({
    onDragEnd: (({ movement: [ x, y ] }) => {
      if (Math.abs(y) > 100) {
        goToSection(y < 0)
      }
    }),
    onWheelStart: ({ ctrlKey, direction: [ x, y ], ...rest }) => {
      if (!ctrlKey) {
        goToSection(y > 0)
      }
    },
  })

  const transitions = useTransition(sectionIndex, (p) => p, {
    from: { opacity: 0, transform: `translate3d(0,${direction?'100%':'-100%'},0)` },
    enter: [
      { opacity: 0, transform: `translate3d(0,${direction?'90%':'-90%'},0)` },
      { opacity: 1, transform: `translate3d(0,0,0)` },
    ],
    leave: { opacity: 0, transform: `translate3d(0,${direction?'-50%':'50%'},0)` },
  })

  return (
    <div className={classes.root}>
      <AppBar onMenuItemClick={setSection} />

      <Grid container
            justify="center"
            alignItems="center"
            className={classes.container}
            {...bind()}>
        {transitions.map(({ item, props, key }) => {
          const Section = sections[item]
          return (
            <Section key={key} style={props} />
          )
        })}
        <ScrollIndicator />
      </Grid>

      <video
        autoPlay={true}
        playsInline={true}
        loop={true}
        muted={true}
        className={classes.video}
        onPlay={() => setVideoLoaded(true)}>
        <source src="/media/pilaf-1080p.mp4" type="video/mp4" />
        <source src="/media/pilaf-1080p.webm" type="video/webm" />
      </video>
      <div className={classes.videoOverlay}> </div>

      <SplashScreen display={!isVideoLoaded} />

    </div>
  )
}

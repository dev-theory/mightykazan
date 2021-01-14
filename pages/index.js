import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { animated, useSpring } from 'react-spring'
import About from '../components/About'
import AppBar from '../components/AppBar'
import ChickenPlov from '../components/ChickenPlov'
import NomadsJoy from '../components/NomadsJoy'
import ScrollIndicator from '../components/ScrollIndicator'
import SplashScreen from '../components/SplashScreen'
import { scrollToSelector } from '../redux/app'

const useStyles = makeStyles(theme => ({
  root: {
  },
  container: {
    position: 'fixed',
    height: '100%',
    overflowX: 'hidden',
  },
  video: {
    position: 'fixed',
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

const AnimatedGrid = animated(Grid)

export default function Home(props) {
  const classes = useStyles()
  const [ isVideoLoaded, setVideoLoaded ] = useState(false)
  const scrollTo = useSelector(scrollToSelector)
  const scrollProps = useSpring({
    to: { scroll: scrollTo },
    config: { tension: 280, friction: 60 }
  })

  return (
    <div className={classes.root}>
      <AppBar />

      <AnimatedGrid
        container
        justify="center"
        alignItems="center"
        className={classes.container}
        scrollTop={scrollProps.scroll}>
        <NomadsJoy />
        <ChickenPlov />
        <About />
        <ScrollIndicator />
      </AnimatedGrid>

      <video
        autoPlay={true}
        playsInline={true}
        loop={true}
        muted={true}
        className={classes.video}
        onPlay={() => setVideoLoaded(true)}
        >
        <source src="/media/pilaf-1080p.webm" type="video/webm" />
        <source src="/media/pilaf-1080p.mp4" type="video/mp4" />
      </video>
      <div className={classes.videoOverlay}> </div>

      <SplashScreen display={!isVideoLoaded} />

    </div>
  )
}

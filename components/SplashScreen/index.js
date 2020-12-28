import { makeStyles } from '@material-ui/core/styles'
import LinearProgress from '@material-ui/core/LinearProgress'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { animated, useSpring } from 'react-spring'

const useStyles = makeStyles(theme => ({
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    backgroundColor: theme.palette.primary.main,
    zIndex: 99999,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexFlow: 'column wrap',
  },
  img: {
    [theme.breakpoints.down('xs')]: {
      width: '80%',
    },
  },
  progress: {
    marginTop: 10,
    [theme.breakpoints.down('xs')]: {
      width: '50%',
    },
    width: 300,
    backgroundColor: '#565659',
  },
  progressBarColorPrimary: {
    backgroundColor: '#B0B0B0',
  },
}))

export default function SplashScreen(props) {
  const classes = useStyles()
  const [ display, setDisplay ] = useState(props.display)
  const styleProps = useSpring({
    to: { opacity: props.display ? 1 : 0 },
    onRest: () => setDisplay(props.display)
  })
  return display && (
    <animated.div className={classes.root} style={styleProps}>
      <img className={classes.img} src="/images/mightykazan-logo-brand-white.png" />
      <LinearProgress classes={{ root: classes.progress, barColorPrimary: classes.progressBarColorPrimary }} />
    </animated.div>
  )
}

SplashScreen.propTypes = {
  display: PropTypes.bool.isRequired,
}

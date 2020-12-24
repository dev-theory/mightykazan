import ArrowDown from '@material-ui/icons/KeyboardArrowDown'
import { makeStyles } from '@material-ui/core/styles'
import { useEffect } from 'react'
import { animated, useSpring } from 'react-spring'

const useStyles = makeStyles(theme => ({
  root: {
    position: 'absolute',
    bottom: 0,
    textAlign: 'center',
    userSelect: 'none',
    color: 'white',
    lineHeight: '0.2',
  },
  icon: {
    height: '3rem',
    width: '3rem',
    marginTop: -6,
  },
  label: {
    fontSize: '1.2rem',
  },
}))

export default function ScrollIndicator() {
  const classes = useStyles()
  const [ styleProps, setStyleProps, stop ] = useSpring(() => ({
    to: { lineHeight: 0.2 },
    config: { friction: 30, tension: 200 }
  }))

  useEffect(() => {
    const intervalId = setInterval(() => {
      setStyleProps({ lineHeight: styleProps.lineHeight.value === 0.2 ? 1 : 0.2 })
    }, 200)
    return () => clearInterval(intervalId)
  })

  return (
    <div className={classes.root}>
      <animated.div style={styleProps} className={classes.label}>scroll</animated.div>
      <ArrowDown className={classes.icon} />
    </div>
  )
}

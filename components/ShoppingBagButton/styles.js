import { useSpring } from 'react-spring'
import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  tooltipPlacementLeft: {
    marginRight: '0px',
  },
}))

export const useAnimatedStyles = (reset) => {
  const { x } = useSpring({
    from: { x: 0 },
    to: { x: 1 },
    reset,
    config: { duration: 1500 },
  })
  return {
    transform: x.interpolate({
      range: [0, 0.22, 0.3, 0.38, 0.46, 0.54, 0.62, 0.7, 0.78, 1],
      output: [1, 0.87, 0.8, 1.3, 0.8, 1.3, 0.8, 1.3, 1.1, 1],
    }).interpolate(x=>`scale(${x})`)
  }
}

import ArrowDown from "@material-ui/icons/KeyboardArrowDown"
import { makeStyles } from "@material-ui/core/styles"
import { useState } from "react"
import { animated, useSpring } from "react-spring"

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    bottom: 0,
    textAlign: "center",
    userSelect: "none",
    color: "white",
    height: "2.5rem",
  },
  icon: {
    height: "3rem",
    width: "3rem",
  },
}))

const AnimatedArrowDown = animated(ArrowDown)

export default function ScrollIndicator() {
  const classes = useStyles()
  const [reset, setReset] = useState(true)
  const styleProps = useSpring({
    to: {
      opacity: reset ? 1 : 0.3,
      transform: reset ? "translateY(0px)" : "translateY(-20px)",
    },
    config: { friction: 20, tension: 210 },
    onRest: () => setReset(!reset),
  })

  return (
    <div className={classes.root}>
      <AnimatedArrowDown className={classes.icon} style={styleProps} />
    </div>
  )
}

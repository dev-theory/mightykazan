import { InView } from 'react-intersection-observer'
import { animated, useSpring } from 'react-spring'

const useVisibilityAnimator = (props) => {
  const { from, delay = 300, ...rest } = props
  const [ animatedStyles, setStyles ] = useSpring(() => ({ to: from }))
  const onVisibilityChange = (inView) => inView && setStyles({ delay , ...rest })
  return [ animatedStyles, onVisibilityChange ]
}

export default function VisibilityAnimator ({ children, ...props }) {
  const [ styles, onChange ] = useVisibilityAnimator(props)
  return (
    <InView as="div" onChange={onChange} triggerOnce={true}>
      <animated.div style={styles}>
        {children}
      </animated.div>
    </InView>
  )
}

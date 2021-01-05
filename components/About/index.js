import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Div100vh from 'react-div-100vh'
import { animated, useSpring } from 'react-spring'
import { useStyles } from './styles'

export default function About(props) {
  const classes = useStyles()
  const section1Props = useSpring({
    delay: 100,
    from: { transform: 'translateX(-200px)', opacity: 0 },
    to: { transform: 'translateX(0px)', opacity: 1 },
  })
  const section2Props = useSpring({
    delay: 100,
    from: { transform: 'translateX(200px)', opacity: 0 },
    to: { transform: 'translateX(0px)', opacity: 1 },
  })
  const section2IconProps = useSpring({
    delay: 100,
    from: { transform: 'scale(0.6)', opacity: 0 },
    to: { transform: 'scale(1)', opacity: 1 },
    config: { friction: 7, tension: 300 }
  })
  return (
    <Grid
      {...props}
      container
      justify="center"
      alignItems="center"
      className={classes.root}>
      <Div100vh className={classes.container}>
        <Grid item xs={12} sm={9} md={6} lg={3}>
          <div>
            <img className={classes.logo} src="/images/mightykazan-logo-brand-white.png" />
          </div>
          <animated.div style={section1Props}>
            <Divider className={classes.divider} />
            <Typography variant="body1">
              Our specialty is the Central Asian <em><strong>"Plov"</strong></em> a rice dish simmered in a rich stew of meat and vegetables carrots and onion. We cook our <em><strong>plov</strong></em> with firewood in a <em><strong>"Kazan"</strong></em> (cast iron pot) according to the authentic traditions.
            </Typography>
          </animated.div>
          <animated.div style={section2Props}>
            <Divider className={classes.divider} />
            <animated.div style={section2IconProps}>
              <img className={classes.iconPics} src="/images/sheep-white.png" />
              <img className={classes.iconPics} src="/images/carrot-white.png" />
              <img className={classes.iconPics} src="/images/onion-white.png" />
            </animated.div>
            <Typography variant="body1">
              We use only quality ingredients. Based on the season we buy from local farmers to support local businesses.
            </Typography>
          </animated.div>
        </Grid>
      </Div100vh>
    </Grid>
  )
}

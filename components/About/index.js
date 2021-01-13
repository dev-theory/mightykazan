import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Footer from '../Footer'
import VisibilityAnimator from '../VisibilityAnimator'
import {
  section1Props,
  section2Props,
  section2IconsProps,
  useStyles
} from './styles'

export default function About(props) {
  const classes = useStyles()
  return (
    <Grid
      id="section-about"
      container
      justify="center"
      alignItems="center"
      className={classes.root}>
      <div className={classes.container}>
        <Grid item xs={12} sm={9} md={6} lg={3}>
          <div>
            <img className={classes.logo} src="/images/mightykazan-logo-brand-white.png" />
          </div>
          <VisibilityAnimator {...section1Props}>
              <Divider className={classes.divider} />
              <Typography variant="body1">
                We are proud to serve Toronto and the area. Our specialty is the Central Asian <em><strong>"Plov"</strong></em> a rice dish simmered in a rich stew of meat and vegetables carrots and onion. We cook our <em><strong>plov</strong></em> with firewood in a <em><strong>"Kazan"</strong></em> (cast iron pot) according to the authentic traditions.
              </Typography>
          </VisibilityAnimator>
          <VisibilityAnimator {...section2Props}>
              <Divider className={classes.divider} />
              <VisibilityAnimator {...section2IconsProps}>
                <img className={classes.iconPics} src="/images/sheep-white.png" />
                <img className={classes.iconPics} src="/images/carrot-white.png" />
                <img className={classes.iconPics} src="/images/onion-white.png" />
              </VisibilityAnimator>
              <Typography variant="body1">
                We use only quality ingredients. Based on the season we buy from local farmers to support local businesses.
              </Typography>
          </VisibilityAnimator>
          <Footer classes={{ root: classes.footer }} />
        </Grid>
      </div>
    </Grid>
  )
}

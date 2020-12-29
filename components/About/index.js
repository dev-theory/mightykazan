import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Div100vh from 'react-div-100vh'

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
    backgroundColor: theme.palette.primary.main,
  },
  container: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    position: 'fixed',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: '14px',
    textAlign: 'center',
  },
  divider: {
    width: '40%',
    margin: '1rem auto',
  },
  iconPics: {
    margin: 7,
    width: '52px',
  },
  logo: {
    width: '160px',
  },
  title1: {
    fontFamily: 'Yataghan',
  },
  title2: {
    fontFamily: 'Fascinate',
    fontSize: '3rem',
  },
}))

export default function About(props) {
  const classes = useStyles()
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
          <Divider className={classes.divider} />
          <Typography variant="body1">
            Our specialty is a Central Asian <em><strong>"Plov"</strong></em> a rice dish simmered in a rich stew of meat and vegetables carrots and onion. We cook our <em><strong>plov</strong></em> with firewood in a <em><strong>"Kazan"</strong></em> (cast iron pot) according to the authentic traditions.
          </Typography>
          <Divider className={classes.divider} />
          <div>
            <img className={classes.iconPics} src="/images/sheep-white.png" />
            <img className={classes.iconPics} src="/images/carrot-white.png" />
            <img className={classes.iconPics} src="/images/onion-white.png" />
          </div>
          <Typography variant="body1">
            We use only quality ingredients. Based on the season we buy from local farmers to support local businesses.
          </Typography>
        </Grid>
      </Div100vh>
    </Grid>
  )
}

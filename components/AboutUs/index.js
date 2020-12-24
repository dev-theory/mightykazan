import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import AddToCart from '../AddToCart'

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
    color: 'white',
    padding: '16px',
    height: '100%',
    width: '100%',
    backgroundColor: 'orange',
  },
  divider: {
    width: '50%',
    margin: '1rem auto',
  },
  emphasizedText: {
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  price: {
    fontSize: '2rem',
  },
  title1: {
    fontFamily: 'Yataghan',
  },
  title2: {
    fontFamily: 'Fascinate',
    fontSize: '3rem',
  },
}))

export default function AboutUs(props) {
  const classes = useStyles()
  return (
    <Grid
      {...props}
      container
      justify="center"
      alignItems="center"
      className={classes.root}>
      <Grid item xs={12} sm={9} md={6} lg={3}>
        <Typography variant="h4" className={classes.title1}>About <span className={classes.title2}>Us</span></Typography>
        <Divider className={classes.divider} />
        <Typography variant="body1">
          Some info about us is here...
        </Typography>
        <Divider className={classes.divider} />
        <Typography variant="body1">Serving size - 350g</Typography>
      </Grid>
    </Grid>
  )
}

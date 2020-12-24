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

export default function ChickenPlov(props) {
  const classes = useStyles()
  return (
    <Grid
      {...props}
      container
      justify="center"
      alignItems="center"
      className={classes.root}>
      <Grid item xs={12} sm={9} md={6} lg={3}>
        <Typography variant="h4" className={classes.title1}>The <span className={classes.title2}>Birdie</span></Typography>
        <Divider className={classes.divider} />
        <Typography variant="body1">
          This amazing nomadic <span className={classes.emphasizedText}>plov</span> is prepared on the firewood according to authentic traditions in a cast iron <span className={classes.emphasizedText}>kazan</span> with <span className={classes.emphasizedText}>quality</span> rice, carrots and tender boneless chicken meat.
        </Typography>
        <Divider className={classes.divider} />
        <Typography variant="body1" className={classes.price}>$ 13.99 <Typography component="span" variant="body2">CAD</Typography></Typography>
        <Typography variant="body1">Serving size - 350g</Typography>
        <AddToCart />
      </Grid>
    </Grid>
  )
}

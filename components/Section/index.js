import Checkbox from '@material-ui/core/Checkbox'
import Divider from '@material-ui/core/Divider'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormGroup from '@material-ui/core/FormGroup'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'
import { useState } from 'react'
import Div100vh from 'react-div-100vh'
import AddToCart from '../AddToCart'

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
    color: 'white',
    height: '100%',
    width: '100%',
  },
  container: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    position: 'fixed',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '14px',
  },
  divider: {
    width: '40%',
    margin: '1rem auto',
  },
  formGroup: {
    justifyContent: 'center',
  },
  price: {
    fontSize: '2rem',
  },
  title1: {
    textOverflow: 'clip',
    fontFamily: 'Yataghan',
  },
  title2: {
    fontFamily: 'Fascinate',
    fontSize: '3rem',
  },
}))

export default function Section(props) {
  const classes = useStyles(props)
  const [ salad, setSalad ] = useState(false)
  const [ meatPocket, setMeatPocket ] = useState(false)
  const handleSalad = () => setSalad(!salad)
  const handleMeatPocket = () => setMeatPocket(!meatPocket)
  const handleAddToCart = (e) => { console.log(e) }
  return (
    <Grid
      style={props.style}
      container
      justify="center"
      alignItems="center"
      className={classes.root}>
      <Div100vh className={classes.container}>
        <Grid item xs={12} sm={9} md={6} lg={3}>
          <Typography variant="h4" noWrap className={classes.title1}>{props.title}<span className={classes.title2}>{props.title2}</span></Typography>
          <Divider className={classes.divider} />
          <Typography variant="body1">{props.description}</Typography>
          <Divider className={classes.divider} />
          <Typography variant="body1" className={classes.price}>${props.price} <Typography component="span" variant="body2">{props.currency ? props.currency : 'CAD'}</Typography></Typography>
          <Typography variant="body1">Serving size - {props.servingSize}</Typography>
          <FormGroup row classes={{ root: classes.formGroup }}>
            <FormControlLabel
              control={<Checkbox checked={salad} onChange={handleSalad} name="addSalad" />}
              label="Add tomato barberry salad $2.99"
              />
          </FormGroup>
          <FormGroup row classes={{ root: classes.formGroup }}>
            <FormControlLabel
              control={<Checkbox checked={meatPocket} onChange={handleMeatPocket} name="addMeatPie" />}
              label="Add flaky meat pocket $4.99"
              />
          </FormGroup>
          <AddToCart itemId={props.id} onClick={handleAddToCart} />
        </Grid>
      </Div100vh>
    </Grid>
  )
}

Section.propTypes = {
  id: PropTypes.string.required,
  title: PropTypes.string.required,
  title2: PropTypes.string,
  description: PropTypes.string.required,
  price: PropTypes.number.required,
  currency: PropTypes.string,
  servingSize: PropTypes.string.required,
}

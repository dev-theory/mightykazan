import Button from '@material-ui/core/Button'
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
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../../redux/cart'
import { itemByIdSelector } from '../../redux/itemsById'
import { useStyles } from './styles'

export default function Section(props) {
  const classes = useStyles(props)
  const dispatch = useDispatch()
  const item = useSelector(state => itemByIdSelector(state, props.id))
  const itemSalad = useSelector(state => itemByIdSelector(state, '3'))
  const itemMeatPocket = useSelector(state => itemByIdSelector(state, '4'))
  const [ salad, setSalad ] = useState(false)
  const [ meatPocket, setMeatPocket ] = useState(false)

  const handleSalad = () => setSalad(!salad)
  const handleMeatPocket = () => setMeatPocket(!meatPocket)
  const resetAddons = () => {
    setSalad(false)
    setMeatPocket(false)
  }
  const handleAddToOrder = () => {
    if (salad) { dispatch(addItem({ id: itemSalad.id })) }
    if (meatPocket) { dispatch(addItem({ id: itemMeatPocket.id })) }
    dispatch(addItem({ id: props.id }))
    resetAddons()
  }
  return (
    <Grid
      id={`section-${props.id}`}
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
          <Typography variant="body1" className={classes.price}>${item.price} <Typography component="span" variant="body2">{item.currency ? item.currency : 'CAD'}</Typography></Typography>
          <FormGroup row classes={{ root: classes.formGroup }}>
            <FormControlLabel
              control={<Checkbox
                           checked={salad}
                           onChange={handleSalad}
                           name="addSalad" />}
              label={`Add ${itemSalad.name} $${itemSalad.price}`}
              classes={{ label: classes.addonLabel }}
              />
          </FormGroup>
          <FormGroup row classes={{ root: classes.formGroup }}>
            <FormControlLabel
              control={<Checkbox
                           checked={meatPocket}
                           onChange={handleMeatPocket}
                           name="addMeatPie" />}
              label={`Add ${itemMeatPocket.name} $${itemMeatPocket.price}`}
              classes={{ label: classes.addonLabel }}
              />
          </FormGroup>
          <Button
            variant="outlined"
            className={classes.addToOrderButton}
            onClick={handleAddToOrder}>
            Add to order
          </Button>

        </Grid>
      </Div100vh>
    </Grid>
  )
}

Section.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  title2: PropTypes.string,
  description: PropTypes.string.isRequired,
  price: PropTypes.number,
  currency: PropTypes.string,
  servingSize: PropTypes.string,
}

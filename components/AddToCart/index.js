import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '8px',
  },
  // outlinedPrimary: {
  //   boxShadow: '0px 0px 10px rgba(0,0,0,1)',
  // },
  // label: {
  //   textShadow: '0px 0px 10px rgba(0,0,0,1)',
  // },
}))

export default function AddToCart() {
  const classes = useStyles()
  return (
    <Button variant="outlined" color="primary" classes={classes}>Add to cart</Button>
  )
}

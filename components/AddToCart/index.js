import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '8px',
  },
  outlined: {
    color: theme.palette.text.primary,
    borderColor: `rgba(255,255,255,0.5)`,
    '&:hover': {
      borderColor: theme.palette.text.primary,
    },
  },
}))

export default function AddToCart() {
  const classes = useStyles()
  return (
      <Button variant="outlined" classes={classes}>Add to cart</Button>
  )
}

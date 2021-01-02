import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  root: {
    backgroundImage: "url('/images/chicken-plov.jpg')",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
  container: {
    backgroundColor: 'rgba(0,0,0,0.35)',
  },
}))

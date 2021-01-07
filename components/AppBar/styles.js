import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  root: {
    background: 'linear-gradient(rgba(0,0,0,0.75), transparent)',
  },
  nonHomePage: {
    background: 'none',
  },
  appBarSpacer: {
    flexGrow: 1,
  },
}))

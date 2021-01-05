import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
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
}))

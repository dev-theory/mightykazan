import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
    color: 'white',
    height: '100%',
    width: '100%',
  },
  addonLabel: {
    whiteSpace: 'nowrap',
  },
  addToOrderButton: {
    marginTop: '8px',
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
    fontFamily: 'Yataghan, Roboto, sans-serif',
  },
  title2: {
    fontFamily: 'Fascinate, Roboto, sans-serif',
    fontSize: '3rem',
  },
}))

import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
    color: 'white',
    height: '100%',
    width: '100%',
    position: 'relative',
    '&:after': {
      background: 'linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.3), transparent)',
      content: '""',
      position: 'absolute',
      height: 70,
      width: '100%',
      bottom: 0,
    },
  },
  addonLabel: {
    whiteSpace: 'nowrap',
  },
  addToOrderButton: {
    marginTop: '8px',
  },
  container: {
    display: 'flex',
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

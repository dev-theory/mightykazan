import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  root: {
    position: 'absolute',
    backgroundColor: 'rgba(56,56,59,0.95)',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: '100%',
    zIndex: 999,
    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'column',
  },
  checkoutButton: {
    paddingLeft: '4rem',
    paddingRight: '4rem',
  },
  container: {
    width: '100%',
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'normal',
    padding: '1rem',
    textAlign: 'center',
  },
  footer: {
    padding: '1.5rem',
    width: '100%',
    textAlign: 'center',
  },
  title: {
    borderBottom: '1px solid #FFFFFF',
    width: '100%',
    textAlign: 'center',
    minHeight: '56px',
    padding: '12px',
  },
  totalAmount: {
    alignSelf: 'flex-end',
  },
  totalAmountLabel: {
    alignSelf: 'flex-start',
    flexGrow: 1,
    textAlign: 'left',
  },
  totalAmountRow: {
    display: 'flex',
    margin: '1.5rem 0',
    padding: '0.5rem 1rem',
    borderTop: '1px solid #FFFFFF',
  },
}))

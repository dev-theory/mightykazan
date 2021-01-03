import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  value: {
    margin: '0 0.5rem',
  },
  icon: {
    height: '2.5rem',
    width: '2.5rem',
  },
  iconButton: {
    padding: 0,
  },
}))

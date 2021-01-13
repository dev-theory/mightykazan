import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.brand.main,
    padding: '1rem',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    textAlign: 'center',
  },
  devTheory: {
    textDecoration: 'underline',
    fontWeight: 'bold',
  },
  divider: {
    width: '40%',
    margin: '1rem auto',
  },
  footer: {
    marginTop: '3rem',
  },
  iconPics: {
    margin: 7,
    width: '52px',
  },
  logo: {
    width: '160px',
    margin: '1.5rem auto 0 auto',
  },
}))

export const section1Props = {
  from: { transform: 'translateX(-200px)', opacity: 0 },
  to: { transform: 'translateX(0px)', opacity: 1 },
}

export const section2Props = {
  from: { transform: 'translateX(200px)', opacity: 0 },
  to: { transform: 'translateX(0px)', opacity: 1 },
}

export const section2IconsProps = {
  from: { transform: 'scale(0.6)', opacity: 0 },
  to: { transform: 'scale(1)', opacity: 1 },
  config: { friction: 7, tension: 300 }
}

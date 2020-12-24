import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  container: {
    userSelect: 'none',
    textAlign: 'center',
    color: '#fff',
  },
  logo: {
    height: '3.5rem',
    width: '3.5rem',
    // filter: "progid:DXImageTransform.Microsoft.Dropshadow(OffX=0, OffY=0, Color='#444')",
    // filter: 'drop-shadow(0px 0px 10px rgba(0,0,0,1))',
  },
  mighty: {
    fontFamily: 'Fascinate',
    fontSize: '2rem',
    // textShadow: '0px 0px 10px rgba(0,0,0,1)',
    lineHeight: '1',
  },
  kazan: {
    fontFamily: 'Yataghan',
    fontSize: '1.8rem',
    // textShadow: '0px 0px 10px rgba(0,0,0,1)',
    lineHeight: '1.4',
  },
}))

export default function Logo() {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <img src="/images/mightykazan-logo-white.png" className={classes.logo} />
      <div className={classes.mighty}>Mighty</div>
      <div className={classes.kazan}>Kazan</div>
    </div>
  )
}

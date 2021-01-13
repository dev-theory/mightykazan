import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import Fade from '@material-ui/core/Fade'
import { useStyles } from './styles'

export default function ProgressButton(props) {
  const { inProgress, onClick } = props
  const classes = useStyles(props)
  return (
    <Button
      variant="outlined"
      disabled={inProgress}
      className={classes.button}
      onClick={onClick}>
      {props.children}
      <Fade
        in={inProgress}
        timeout={100}
        >
        <CircularProgress
          size={22}
          thickness={12}
          className={classes.progress} />
      </Fade>
    </Button>
  )
}

import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import IncreaseIcon from "@material-ui/icons/AddCircleOutline"
import DecreaseIcon from "@material-ui/icons/RemoveCircleOutline"
import PropTypes from "prop-types"
import { useStyles } from "./styles"

export default function Counter(props) {
  const classes = useStyles(props)
  const { minValue = 0, onChange, value } = props
  const disableDecrease = value <= minValue
  const handleIncrease = () => onChange(value + 1)
  const handleDecrease = () => onChange(value - 1)
  return (
    <div className={classes.root}>
      <IconButton
        disabled={disableDecrease}
        className={classes.iconButton}
        onClick={handleDecrease}
      >
        <DecreaseIcon
          color={disableDecrease ? "disabled" : "inherit"}
          className={classes.icon}
        />
      </IconButton>
      <Typography variant="body1" className={classes.value}>
        {value}
      </Typography>
      <IconButton className={classes.iconButton} onClick={handleIncrease}>
        <IncreaseIcon className={classes.icon} />
      </IconButton>
    </div>
  )
}

Counter.propTypes = {
  minValue: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
}

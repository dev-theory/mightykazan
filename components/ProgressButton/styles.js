import { makeStyles } from "@material-ui/core/styles"

export const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: "8px",
    paddingLeft: 42,
    paddingRight: 42,
  },
  progress: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: "auto 10px auto auto",
    color: theme.palette.text.primary,
  },
}))

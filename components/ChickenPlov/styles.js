import { makeStyles } from "@material-ui/core/styles"

export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: "url('/images/chicken-plov.jpg')",
    backgroundPosition: "center",
    backgroundSize: "cover",
    "&:before": {
      background: "linear-gradient(to bottom, rgba(0,0,0,1), transparent)",
      content: '""',
      position: "absolute",
      height: 50,
      width: "100%",
      top: 0,
    },
    "&:after": {
      background: "linear-gradient(to top, rgba(255,152,0,1), transparent)",
      height: 60,
    },
  },
  container: {
    backgroundColor: "rgba(0,0,0,0.35)",
    width: "100%",
  },
}))

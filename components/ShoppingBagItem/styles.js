import { makeStyles } from "@material-ui/core/styles"

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0 0.5rem 0.5rem 0.5rem",
  },
  name: {
    flexGrow: 1,
    fontSize: "1rem",
  },
  nameRow: {
    display: "flex",
    textAlign: "left",
    alignItems: "center",
  },
  container: {
    display: "flex",
    alignItems: "center",
  },
  qty: {
    flexGrow: 1,
    textAlign: "left",
    paddingLeft: "0.5rem",
    fontSize: "1rem",
  },
  price: {
    fontSize: "1rem",
  },
}))

import { makeStyles } from "@material-ui/core/styles"

export const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    backgroundColor: "rgba(56,56,59,0.95)",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: "100%",
    zIndex: 999,
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "column",
    padding: "1rem",
  },
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "normal",
    textAlign: "center",
  },
  divider: {
    width: "150px",
    margin: "0.7rem auto",
  },
  logo: {
    userSelect: "none",
    width: "160px",
    margin: "0 auto 1rem auto",
  },
  menuItem: {
    width: "100%",
    fontSize: "2em",
    justifyContent: "center",
  },
}))

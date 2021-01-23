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
    zIndex: 9999,
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "column",
    padding: "1rem",
  },
  closeButton: {
    position: "absolute",
    top: 0,
    right: 0,
    margin: "0.25rem 1rem",
  },
  container: {
    width: "100%",
    maxWidth: "375px",
    alignItems: "center",
    justifyContent: "normal",
    textAlign: "center",
  },
  coupon: {
    fontWeight: 700,
    border: "1px dashed rgba(255,255,255,0.5)",
    whiteSpace: "nowrap",
    padding: "0.25rem 0.5rem",
  },
  divider: {
    width: "150px",
    margin: "0.7rem auto",
  },
  emailRow: {
    padding: "1rem",
  },
  logo: {
    userSelect: "none",
    width: "160px",
    margin: "0 auto 1rem auto",
  },
}))

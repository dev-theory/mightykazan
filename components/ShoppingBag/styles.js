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
  },
  amount: {
    alignSelf: "flex-end",
    fontSize: "1rem",
  },
  amountLabel: {
    alignSelf: "flex-start",
    flexGrow: 1,
    textAlign: "left",
    fontSize: "1rem",
  },
  checkoutButton: {
    paddingLeft: "4rem",
    paddingRight: "4rem",
  },
  container: {
    width: "100%",
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "normal",
    padding: "1rem",
    textAlign: "center",
  },
  footer: {
    padding: "0 1rem 1.5rem 1rem",
    width: "100%",
    textAlign: "center",
  },
  subtotalRow: {
    display: "flex",
    marginTop: "0.5rem",
    padding: "0.5rem 1rem",
    borderTop: "1px solid #FFFFFF",
  },
  taxesRow: {
    display: "flex",
    padding: "0 1rem 0.5rem 1rem",
  },
  title: {
    borderBottom: "1px solid #FFFFFF",
    width: "100%",
    textAlign: "center",
    minHeight: "56px",
    padding: "12px",
  },
  totalAmount: {
    fontSize: "1.25rem",
  },
  totalAmountLabel: {
    fontSize: "1.25rem",
  },
  totalAmountRow: {
    display: "flex",
    padding: "0.5rem 1rem 0 1rem",
    borderTop: "1px solid #FFFFFF",
  },
}))

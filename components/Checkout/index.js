import Divider from "@material-ui/core/Divider"
import IconButton from "@material-ui/core/IconButton"
import Slide from "@material-ui/core/Slide"
import TextField from "@material-ui/core/TextField"
import Typography from "@material-ui/core/Typography"
import CloseIcon from "@material-ui/icons/Close"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { isCheckoutOpenSelector, showHome } from "../../redux/app"
import {
  checkout,
  checkoutEmailSelector,
  checkoutInProgressSelector,
  clear,
  setCheckoutEmail,
  submitOrder,
} from "../../redux/cart"
import Footer from "../Footer"
import ProgressButton from "../ProgressButton"
import { useStyles } from "./styles"

const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export default function Checkout(props) {
  const classes = useStyles(props)
  const dispatch = useDispatch()
  const email = useSelector(checkoutEmailSelector)
  const [emailError, setEmailError] = useState(false)
  const open = useSelector(isCheckoutOpenSelector)
  const orderInProgress = useSelector(checkoutInProgressSelector)

  const onClose = () => {
    dispatch(clear())
    dispatch(showHome())
  }

  const onEmailChange = (event) => {
    const { value } = event.target
    dispatch(setCheckoutEmail(value))
    setEmailError(!value.length)
  }

  const submit = async () => {
    try {
      if (!emailPattern.test(email)) {
        setEmailError(true)
        return
      }
      dispatch(checkout(true))
      await dispatch(submitOrder())
      dispatch(checkout(false))
      dispatch(clear())
      dispatch(showHome())
    } catch (error) {
      dispatch(checkout(false))
    }
  }

  const onEmailKeyPress = (event) => {
    if (event.key === "Enter") {
      submit()
    }
  }

  return (
    <Slide in={open} direction="up">
      <div className={classes.root}>
        <div className={classes.container}>
          <IconButton
            aria-label="menu"
            className={classes.closeButton}
            edge="start"
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>

          <img
            className={classes.logo}
            src="/images/mightykazan-logo-brand-white.png"
          />
          <Divider className={classes.divider} />
          <Typography>
            Hey! We can't take your order just yet but we are launching soon.
            Leave us your email and we will let you know when we launch and will
            send you a <span className={classes.coupon}>25% OFF coupon</span>{" "}
            for your first order.
          </Typography>
          <div className={classes.emailRow}>
            <TextField
              autoFocus
              error={emailError}
              fullWidth
              helperText={emailError ? "Valid email is required" : " "}
              label="Your email"
              onKeyPress={onEmailKeyPress}
              onChange={onEmailChange}
              pattern={emailPattern}
              required
              type="email"
              value={email}
              variant="outlined"
            />
          </div>
          <div>
            <ProgressButton
              inProgress={orderInProgress}
              variant="outlined"
              onClick={submit}
            >
              Send me the coupon
            </ProgressButton>
          </div>
        </div>
        <Footer />
      </div>
    </Slide>
  )
}

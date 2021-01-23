import Typography from "@material-ui/core/Typography"
import { useStyles } from "./styles"

export default function Footer(props) {
  const classes = useStyles(props)
  const year = new Date().getFullYear()
  return (
    <div className={classes.root}>
      <Typography variant="subtitle2">© {year} Mighty Kazan</Typography>
      <Typography variant="subtitle2">
        built by{" "}
        <a className={classes.devTheory} href="https://devtheory.com">
          DevTheory Inc.
        </a>
      </Typography>
    </div>
  )
}

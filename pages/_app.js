import { ThemeProvider } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import Head from "next/head"
import PropTypes from "prop-types"
import { useEffect } from "react"
import { Provider } from "react-redux"
import { initializeGTM } from "../lib/gtm"
import { loadScript } from "../lib/utils"
import "../providers/globals.css"
import theme from "../providers/theme"
import store from "../redux/store"

function loadGeoip2() {
  loadScript("https://geoip-js.com/js/apis/geoip2/v2.1/geoip2.js").then(() => {
    geoip2.city(
      (data) => initializeGTM(store, { postal_code: data.postal.code }),
      () => initializeGTM()
    )
  })
}

export default function MyApp({ Component, pageProps }) {
  useEffect(loadGeoip2)

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side")
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <>
      <Head>
        <title>Mighty Kazan - Nomadic food of Central Asia</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
}

import TagManager from 'react-gtm-module'

export function initializeGTM(store, dataLayer) {
  if (!process.env.NEXT_PUBLIC_GTM_ID) {
    return
  }
  TagManager.initialize({
    gtmId: process.env.NEXT_PUBLIC_GTM_ID,
    auth: process.env.NEXT_PUBLIC_GTM_AUTH,
    preview: process.env.NEXT_PUBLIC_GTM_PREVIEW,
    dataLayer,
  })
}

export function dataLayer(data) {
  if (!process.env.NEXT_PUBLIC_GTM_ID) {
    return
  }
  TagManager.dataLayer({ dataLayer: data })
}

export function loadScript(src) {
  return new Promise((resolve, reject) => {
    const scriptTag = document.createElement("script")
    scriptTag.type = "text/javascript"
    scriptTag.async = false
    scriptTag.onload = resolve
    scriptTag.onerror = reject
    scriptTag.src = src
    const [body] = document.getElementsByTagName("body")
    if (!body) {
      return reject(
        new Error("No document body found to insert the script cript.")
      )
    }
    body.appendChild(scriptTag)
  })
}


// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/home/fiona/webdev/bellakosmetik2022/bellakosmetik/src/pages/404.js")),
  "component---src-pages-datenschutz-js": preferDefault(require("/home/fiona/webdev/bellakosmetik2022/bellakosmetik/src/pages/datenschutz.js")),
  "component---src-pages-index-js": preferDefault(require("/home/fiona/webdev/bellakosmetik2022/bellakosmetik/src/pages/index.js"))
}


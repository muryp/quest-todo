import layouts from '../views/layouts'
import NotFound from '../views/pages/404'
import Routes, { TRoute, TRouteSub } from './routes'

function getRoutes(url: string[], count: number, routes: TRoute) {
  const NAME_VAL = url[count]
  const Result = routes[NAME_VAL]
  if (count + 1 < url.length) {
    return getRoutes(url, count + 1, Result as TRoute)
  }
  return Result as TRouteSub
}

const getContent = async () => {
  const App = document.getElementById('app')!
  const currentUrl = new URL(window.location.href).hash
    .replace(/\?.*/, '')
    .replace(/^#/, '')
    .split('/')

  const URLNOW = currentUrl[0] === '' ? ['home'] : currentUrl
  const CONTENT = getRoutes(URLNOW, 0, Routes)
  if (typeof CONTENT === 'string') {
    App.innerHTML = CONTENT
    return
  }
  if (CONTENT !== undefined) {
    App.innerHTML = layouts(CONTENT.render)
    const fn = await CONTENT.script
    if (fn) {
      fn.default()
      return
    }
  }
  App.innerHTML = NotFound
}
getContent()
window.onpopstate = async () => {
  const getEl = document.getElementById('app')!
  getEl.innerHTML = 'loading...'
  await getContent()
}

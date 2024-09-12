import layouts from '../views/layouts'
import NotFound from '../views/pages/404'
import routes from './routes'

const getContent = async () => {
  const App = document.getElementById('app')!
  const currentUrl = new URL(window.location.href).hash
    .replace(/\?.*/, '')
    .replace(/^#/, '')
  const URLNOW = currentUrl === '' ? 'home' : currentUrl

  const CONTENT = routes[URLNOW as 'edit']
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

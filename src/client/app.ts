import NotFound from '../component/pages/404'
import routes from './routes'

const getContent = () => {
  const App = document.getElementById('app')!
  const currentUrl = new URL(window.location.href).hash.replace(/^#/, '')
  const URLNOW = currentUrl === '' ? 'home' : currentUrl

  const CONTENT = routes[URLNOW as 'edit']
  if (CONTENT !== undefined) {
    App.innerHTML = CONTENT.render
    const script = document.createElement('script')
    script.src = CONTENT.script
    script.type = 'module'
    App.appendChild(script)
    return
  }
  App.innerHTML = NotFound
}
getContent()
window.onpopstate = () => {
  getContent()
}
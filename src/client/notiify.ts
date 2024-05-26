import Alert from '../component/atoms/alert'

const timeout = 3000
const notify = (type: 'success' | 'err', msg: string) => {
  window.location.href = '#'
  const Notify = document.getElementById('notify')!
  const NotifyEl = document.createElement('div')
  NotifyEl.innerHTML = Alert[type](msg)
  Notify.appendChild(NotifyEl)
  setTimeout(() => {
    Notify.remove()
  }, timeout)
}
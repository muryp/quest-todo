import Alert from '../component/atoms/alert'

type TTypeOf = keyof typeof Alert
const TIMEOUT = 3000
export default (typeOf: TTypeOf, msg: string) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const Notify = document.getElementById('notify')!
  const NotifyEl = document.createElement('div')
  NotifyEl.innerHTML = Alert[typeOf](msg)
  console.log(NotifyEl)
  Notify.appendChild(NotifyEl)
  setTimeout(() => {
    Notify.remove()
  }, TIMEOUT)
  window.location.href = '#'
}

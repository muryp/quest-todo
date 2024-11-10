import Alert from '../../views/atoms/alert'

type TTypeOf = keyof typeof Alert
const TIMEOUT = 3000
export default (typeOf: TTypeOf, msg: string) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const Notify = document.getElementById('notify')!
  const NotifyEl = document.createElement('div')
  NotifyEl.innerHTML = `<div class="alert my-10"/>${Alert[typeOf](msg)}`
  Notify.appendChild(NotifyEl)
  setTimeout(() => {
    Notify.innerHTML = ''
  }, TIMEOUT)
}

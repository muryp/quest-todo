import { ICON_ERR, ICON_SUCCESS } from './icon'

const Element = (msg: string, isErr: boolean) => {
  return html`
    <div
      role="alert"
      class="alert ${isErr ? 'alert-error' : 'alert-success'} fixed z-50">
      ${isErr ? ICON_ERR : ICON_SUCCESS}
      <span>${msg}</span>
    </div>
  `
}
const err = function (msg: string) {
  return Element(msg, true)
}
const success = function (msg: string) {
  return Element(msg, false)
}

export default {
  success,
  err,
}

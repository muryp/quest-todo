import { ICON_ERR, ICON_SUCCESS } from './icon'

const success = function (msg: string) {
  return html`
    <div role="alert" class="alert alert-success fixed z-50">
      ${ICON_SUCCESS}
      <span>${msg}</span>
    </div>
  `
}
const err = function (msg: string) {
  return html`
    <div role="alert" class="alert alert-error fixed z-50">
      ${ICON_ERR}
      <span>${msg}</span>
    </div>
  `
}

export default {
  success,
  err,
}

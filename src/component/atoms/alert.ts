import { ICON_ERR, ICON_SUCCESS } from './icon'

const success = function (msg: string) {
  return html`
    <div role="alert" class="alert alert-success">
      ${ICON_SUCCESS}
      <span>${msg}</span>
    </div>
  `
}
const err = function (msg: string) {
  return html`
    <div role="alert" class="alert alert-success">
      ${ICON_ERR}
      <span>${msg}</span>
    </div>
  `
}

export default {
  success,
  err,
}

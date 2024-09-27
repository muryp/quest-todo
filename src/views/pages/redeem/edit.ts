/* eslint-disable lit/attribute-value-entities */
import { ICON_ALERT } from '../../atoms/icon'

export default html`
  <a class="btn btn-success w-full my-3" href="#redeem/list">
    back to redeem
  </a>
  <div id="main" class="my-3 p-3 [&>*]:my-6">
    <div role="alert" class="alert">
      ${ICON_ALERT}
      <span>id not found.</span>
    </div>
  </div>
`

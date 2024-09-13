/* eslint-disable lit/attribute-value-entities */
import { ICON_ALERT } from '../../atoms/icon'

export default html`
  <a class="btn btn-success w-full my-3" href="#add-redeem">
    Add Redeem items
  </a>
  <div id="main" class="my-3 p-3 [&>*]:my-6">
    <div role="alert" class="alert">
      ${ICON_ALERT}
      <span>Your dont have items to redeem.</span>
    </div>
  </div>
  <div id="loadmore" class="mb-12"></div>
`

import { ICON_SEARCH } from '../atoms/icon'
import { SelectSearch } from '../atoms/select'

export default html`
  <div class="w-full flex items-center gap-2 mt-6">
    <div class="join m-auto">
      <div>
        <div>
          <input class="input input-bordered join-item" placeholder="Search" />
        </div>
      </div>
      ${SelectSearch}
      <div class="indicator">
        <button class="btn btn-base join-item">${ICON_SEARCH}</button>
      </div>
    </div>
  </div>
`

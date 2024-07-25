import { ICON_SEARCH } from '../atoms/icon'
import { SelectSearch } from '../atoms/select'

export default html`
  <div class="w-full p-3">
    <div class="join m-auto max-md:block">
      <div>
        <div>
          <input
            id="search-bar"
            class="input input-bordered join-item max-md:w-full"
            placeholder="Search" />
        </div>
      </div>
      ${SelectSearch}
      <div class="indicator">
        <button class="btn btn-base join-item">${ICON_SEARCH}</button>
      </div>
    </div>
    <a class="btn btn-success w-full my-3" href="#add"> Add Quest </a>
  </div>
`
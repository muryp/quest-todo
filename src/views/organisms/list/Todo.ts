/* eslint-disable indent */
import { ICON_ALERT } from '../../atoms/icon'
import Search from '../../moleculs/Search'

export default function (listTodo: string) {
  listTodo =
    listTodo === ''
      ? listTodo
      : html`
          <div role="alert" class="alert">
            ${ICON_ALERT}
            <span>Your quest list is empty.</span>
          </div>
        `
  return html`
    ${Search}
    <div id="content" class="my-3 p-3">${listTodo}</div>
    <div class="flex justify-center mb-24">
      <button
        type="btn"
        id="loadmore"
        class="btn btn-primary w-1/3 cursor-pointer">
        load more
      </button>
    </div>
  `
}

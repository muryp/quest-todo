/* eslint-disable indent */
import { ICON_ALERT } from '../../atoms/icon'
import Search from '../../moleculs/Search'

export default function (listTodo: string, isHome: boolean) {
  listTodo =
    listTodo !== ''
      ? listTodo
      : html`
          <div role="alert" class="alert">
            ${ICON_ALERT}
            <span>Your ${isHome ? '' : 'complete'} quest list is empty.</span>
          </div>
        `
  let Content = html`
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
  if (isHome) {
    Content = `<div id="total-point"></div>${ Search }${Content}`
  }
  return Content
}
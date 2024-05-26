import Search from '../../moleculs/Search'

export default function (listTodo: string) {
  return html`
    ${Search}
    <div id="content">${listTodo}</div>
    <div class="flex justify-center">
      <button
        type="btn"
        id="loadmore"
        class="btn btn-primary w-1/3 cursor-pointer">
        load more
      </button>
    </div>
  `
}

import { list, total } from '../../db/redeem'

const MAX_PAGE = 5

async function render(currentPage: number) {
  const mainEl = document.getElementById('main')!
  const from = currentPage * MAX_PAGE - MAX_PAGE
  const to = MAX_PAGE * currentPage
  const ListRedeem = await list(from, to)
  const newListEl = ListRedeem.map(({ id, title, description, point }) => {
    return html`
      <div class="card w-full bg-base-100 shadow-xl" id="redeem-${id}">
        <div class="card-body">
          <h2 class="card-title">${title}</h2>
          <p>${description}</p>
          <div class="card-actions justify-end">
            <div class="badge badge-outline">${point}</div>
          </div>
        </div>
      </div>
    `
  }).join('')
  mainEl.innerHTML += newListEl
  const isHaveNewPage = (await total()) > currentPage * MAX_PAGE
  if (isHaveNewPage) {
    const loadMoreBtn = document.getElementById('loadmore')!
    loadMoreBtn.innerHTML = html`
      <button class="btn btn-primary">loadmore</button>
    `
    loadMoreBtn
      .querySelector('button')!
      .addEventListener('click', async (ev: Event) => {
        ev.preventDefault()
        loadMoreBtn.remove()
        render(currentPage + 1)
      })
  }
}
export default render

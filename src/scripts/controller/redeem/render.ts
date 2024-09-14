import Card from '../../../views/organisms/Card/Redeem'
import { list, total } from '../../db/redeem'

const MAX_PAGE = 5

async function render(currentPage: number) {
  const mainEl = document.getElementById('main')!
  const from = currentPage * MAX_PAGE - MAX_PAGE
  const to = MAX_PAGE * currentPage
  const ListRedeem = await list(from, to)
  const newListEl = ListRedeem.map((val) => {
    return Card(val)
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

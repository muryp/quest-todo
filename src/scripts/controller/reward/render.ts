import Card from '../../../views/organisms/Card/Reward'
import { list, total } from '../../db/reward'
import { get } from '../../db/redeem'

const MAX_PAGE = 5

async function render(currentPage: number) {
  const mainEl = document.getElementById('main')!
  const from = currentPage * MAX_PAGE - MAX_PAGE
  const to = MAX_PAGE * currentPage
  const ListReward = await list(from, to)
  if (ListReward.length === 1) {
    return
  }
  const newListEl = ListReward.map(async (val) => {
    const RedeemInfo = await get(val.id)
    if (RedeemInfo) {
      return Card(RedeemInfo, val.qty)
    }
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

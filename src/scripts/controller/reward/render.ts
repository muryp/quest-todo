import Card from '../../../views/organisms/Card/Reward'
import { list, total } from '../../db/reward'
import { get } from '../../db/redeem'

const MAX_PER_PAGE = 5

//TODO: create utils render like this( can use in list history, quest,  reward, redeem )
//TODO: HAVE ARGS (pages, list, notfound, card)
async function render(currentPage: number) {
  const mainEl = document.getElementById('main')!
  const from = currentPage * MAX_PER_PAGE - MAX_PER_PAGE
  const to = MAX_PER_PAGE * currentPage
  const ListReward = await list(from, to)
  if (ListReward.length < 1) {
    return
  }
  const ListEL: string[] = []
  for (const val of ListReward) {
    const RedeemInfo = await get(val.id)
    if (RedeemInfo) {
      ListEL.push(Card(RedeemInfo, val.qty))
    }
  }
  if (currentPage === 1) {
    mainEl.innerHTML = ListEL.join('')
  } else {
    mainEl.innerHTML += ListEL.join('')
  }
  const isHaveNewPage = (await total()) > currentPage * MAX_PER_PAGE
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

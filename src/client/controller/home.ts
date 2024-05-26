import Card from '../../component/moleculs/card/Card'
import notFound from '../../component/moleculs/notFound'
import { total, list } from '../db/quest'

export default async () => {
  const List = document.getElementById('content')!
  const LoadMore = document.getElementById('loadmore')!
  let offside = 0
  let TOTAL = 5
  const LEN_TABLE = await total()
  const Render = async () => {
    const myDb = await list(TOTAL, offside)
    const isNoLoadMore = LEN_TABLE <= TOTAL
    const isCurrHaveList = isNoLoadMore && LEN_TABLE - 5 === 0
    if (isNoLoadMore) {
      LoadMore.remove()
    }
    if (isCurrHaveList) {
      List.innerHTML = notFound
      return
    }
    List.innerHTML =
      List.innerHTML +
      myDb
        .map((val) => {
          return Card(val)
        })
        .join('')
    return
  }
  Render()
  LoadMore.onclick = async (ev) => {
    ev.preventDefault()
    offside = offside + 5
    TOTAL = TOTAL + 5
    await Render()
  }
}
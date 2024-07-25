import Card from '../../../views/organisms/Card/Todo'
import notFound from '../../../views/moleculs/notFound'
import searchOnType from './search'
import type { TInputDbTodo } from '../../../mock/listTodo'

interface TInputGetList {
  TOTAL: number
  offset: number
}
/* TODO:
 * search by title
 * short by title
 * short by date (default)
 * */
export default async (
  getList: (args: TInputGetList) => Promise<[TInputDbTodo[], number]>,
) => {
  const List = document.getElementById('content')!
  const LoadMore = document.getElementById('loadmore')!
  let offset = 0
  let TOTAL = 5
  const Render = async () => {
    const [myDb, LEN_TABLE] = await getList({ TOTAL, offset })
    const isNoLoadMore = LEN_TABLE <= TOTAL
    const isCurrHaveList = isNoLoadMore && LEN_TABLE === 0
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
    offset = offset + 5
    TOTAL = TOTAL + 5
    await Render()
  }
  searchOnType()
}
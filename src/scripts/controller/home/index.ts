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
  let total = 5
  const Render = async (isLoadMore: boolean) => {
    const [myDb, LEN_TABLE] = await getList({ TOTAL: total, offset })
    const isNoLoadMore = LEN_TABLE <= total
    const isCurrHaveList = isNoLoadMore && LEN_TABLE === 0
    if (isNoLoadMore) {
      LoadMore.remove()
    }
    if (isCurrHaveList) {
      List.innerHTML = notFound
      return
    }
    const component = myDb
      .map((val) => {
        return Card(val)
      })
      .join('')
    if (isLoadMore) {
      List.innerHTML = List.innerHTML + component
    } else {
      List.innerHTML = component
    }
  }
  Render(false)
  LoadMore.onclick = async (ev) => {
    ev.preventDefault()
    offset = offset + 5
    total = total + 5
    await Render(true)
  }
  searchOnType()
}

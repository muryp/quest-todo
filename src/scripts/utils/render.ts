import { getListFn } from '../controller/home'
import notFound from '../../views/moleculs/notFound'
import Card from '../../views/organisms/Card/Todo'

export default async (getList: getListFn, isComplete: boolean) => {
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
      List.innerHTML = notFound(isComplete)
      return
    }
    const component = myDb
      .map((val) => {
        return Card(val, isComplete)
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
}
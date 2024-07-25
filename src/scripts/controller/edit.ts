import form from '../../views/organisms/form'
import NotFound from '../../views/pages/404'
import { TvalQuest } from '../../mock/listTodo'
import { get, change } from '../db/todo'

/**
TODO: if success edit new todo,
- add notify
 */
export default async function () {
  const editEl = document.getElementById('edit')!
  const url = new URL(window.location.href)
  const query = url.hash.split('?id=')[1]
  const id = Number(query)
  const data = (await get(id)) as TvalQuest
  if (!data) {
    editEl.innerHTML = NotFound
    return
  }
  editEl.innerHTML = form(data, 'update')
  const btnSave = document.getElementById('add')!
  btnSave.onclick = async (ev) => {
    ev.preventDefault()
    const Data = {
      id: 0,
      point: {
        success: 0,
        fail: 0,
      },
    } as TvalQuest
    const getElParent = (ev.target as HTMLElement).parentElement!
    Data.id = Number(getElParent.id)
    const getInput = getElParent?.querySelectorAll('input')
    getInput?.forEach((el) => {
      const NAME = el.name.split('.')
      if (NAME.length > 1) {
        Data[NAME[0] as 'point']![NAME[1] as 'fail'] = Number(el.value)
      } else {
        Data[el.name as 'title'] = el.value
      }
    })
    Data.description = getElParent!.querySelector('textarea')!.value
    Data.UpdatedAt = Date.now()
    await change(Data)
  }
  return
}
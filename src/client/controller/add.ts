import { TvalQuest } from '../../mock/listQuest'
import notify from '../../utils/notify'
import { add } from '../db/quest'

/**
TODO: if success adding new todo
- reset form
- add notify
 */
export default function () {
  const btnSave = document.getElementById('add')!
  btnSave.onclick = async (ev) => {
    ev.preventDefault()
    try {
      const Data = {
        point: {
          success: 0,
          fail: 0,
        },
      } as TvalQuest
      const getElParent = (ev.target as HTMLElement).parentElement
      const getInput = getElParent?.querySelectorAll('input')
      getInput?.forEach((el) => {
        const NAME = el.name.split('.')
        if (NAME.length > 1) {
          Data[NAME[0] as 'point']![NAME[1] as 'fail'] = Number(el.value)
        } else {
          const title = el.value
          if (title.length <= 1) {
            throw new Error('Error: title required')
          }
          Data[el.name as 'title'] = title
        }
      })
      Data.description = getElParent!.querySelector('textarea')!.value
      Data.createdAt = Date.now()
      Data.UpdatedAt = Date.now()
      await add(Data)
    } catch (err) {
      notify('err', err as string)
    }
  }
  return
}

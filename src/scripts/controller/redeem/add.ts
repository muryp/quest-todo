import { TvalRedeem } from '../../../mock/redeem'
import { add } from '../../db/redeem'
import notify from '../../utils/notify'

export default function () {
  const btnSubmit = document.getElementById('submit')!
  btnSubmit.onclick = (ev) => {
    ev.preventDefault()
    try {
      const Data = {} as TvalRedeem
      const getElParent = (ev.target as HTMLElement).parentElement
      const getInput = getElParent?.querySelectorAll('input')
      getInput?.forEach((el) => {
        const VAL = el.value
        const NAME = el.name
        if (VAL.length <= 1 && NAME === 'title') {
          throw new Error('title required')
        }
        Data[NAME as 'title'] = VAL
      })
      const ElDescription = getElParent!.querySelector('textarea')
      Data.description = ElDescription!.value
      ElDescription!.value = ''
      Data.createdAt = Date.now()
      Data.UpdatedAt = Date.now()
      add(Data)
      ElDescription!.value = ''
      notify('success', 'Add Success!')
    } catch (err) {
      notify('err', err as string)
    }
  }
}

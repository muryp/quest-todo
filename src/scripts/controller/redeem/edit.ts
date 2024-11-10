import { TvalRedeem } from '../../../mock/redeem'
import formRedeem from '../../../views/organisms/form-redeem'
import { change, get } from '../../db/redeem'
import notify from '../../utils/notify'

export default async function () {
  const url = new URL(window.location.href)
  const id = Number(url.hash.split('?id=')[1])
  const El = document.getElementById('main')
  const content = await get(id)
  if (content) {
    const { title, point, description } = content
    El!.innerHTML = formRedeem({
      title,
      point,
      description,
      type: 'update',
    })
    const ElBtn = document.getElementById('submit')!
    ElBtn.onclick = async function (ev) {
      ev.preventDefault()
      const Data = {
        title: '',
        point: 0,
        description: '',
        UpdatedAt: Date.now(),
      } as TvalRedeem
      const getElParent = (ev.target as HTMLElement).parentElement!
      const getInput = getElParent?.querySelectorAll('input')
      getInput?.forEach((el) => {
        Data[el.name as 'title'] = el.value
      })
      Data.description = getElParent!.querySelector('textarea')!.value
      try {
        await change(id, Data)
        notify('success', 'update complete')
      } catch (err) {
        notify('err', 'update fail')
      }
    }
  }
}

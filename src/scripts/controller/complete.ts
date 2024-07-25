import notify from '../../utils/notify'
import { change } from '../db/todo'

export default async function () {
  const id = new URL(window.location.href).hash.split(/\?id=/)[1]
  change({
    id: Number(id),
    UpdatedAt: Date.now(),
    isComplete: 'true',
  })
    .then(async () => {
      window.location.href = '/#'
      notify('success', 'Success Complete Task!')
    })
    .catch((err) => {
      const errMsg = String(err).replace('Error: ', '')
      notify('err', errMsg)
    })
  return
}

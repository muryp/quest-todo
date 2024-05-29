import notify from '../../utils/notify'
import { remove } from '../db/todo'

export default async function () {
  const id = new URL(window.location.href).hash.split(/\?id=/)[1]
  remove(Number(id))
    .then(() => {
      notify('success', 'Delete Success!')
    })
    .catch((err) => {
      const errMsg = String(err).replace('Error: ', '')
      notify('err', errMsg)
    })
  return
}

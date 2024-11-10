import { use } from '../../db/reward'
import notify from '../../utils/notify'

//TODO: history use
export default async function () {
  const id = new URL(window.location.href).hash.split(/\?id=/)[1]
  await use(Number(id))
    .then(() => {
      notify('success', 'success using reward')
    })
    .catch((err) => {
      notify('err', err)
    })
  window.location.href = '#reward/list'
}

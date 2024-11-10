import { sell } from '../../db/reward'
import notify from '../../utils/notify'

export default async function () {
  const id = new URL(window.location.href).hash.split(/\?id=/)[1]
  await sell(Number(id))
    .then(() => {
      notify('success', 'success selling')
    })
    .catch((err) => {
      notify('err', err)
    })

  window.location.href = '#reward/list'
}

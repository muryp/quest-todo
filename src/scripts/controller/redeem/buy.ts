import { buy } from '../../db/reward'
import notify from '../../utils/notify'

export default function () {
  const id = new URL(window.location.href).hash.split(/\?id=/)[1]
  buy(Number(id))
    .then(() => {
      notify('success', 'success buying')
    })
    .catch((err) => {
      notify('err', err)
    })
  window.location.href = '/#redeem/list'
}

import notify from '../../utils/notify'
import { modifePoint } from '../../db/point'
import { TisComplete, change, get } from '../../db/todo'

export default async function () {
  const getHash = window.location.href.split(/#/)[1]
  const [hash, id] = getHash.split('?id=')
  let isComplete: TisComplete
  if (hash.split('/')[1] === 'complete') {
    isComplete = 'true'
  } else {
    isComplete = 'false'
  }
  change({
    id: Number(id),
    UpdatedAt: Date.now(),
    isComplete,
  })
    .then(async () => {
      const GET_INFO = await get(Number(id))
      let point: number
      if (hash === 'quest/complete') {
        point = GET_INFO!.point.success
      } else {
        point = GET_INFO!.point.fail
      }
      await modifePoint(point)
        .then(() => {
          window.location.href = '/#quest/Listcomplete'
          notify('success', 'Success Complete Task!')
        })
        .catch((err) => {
          const errMsg = String(err).replace('Error: ', '')
          notify('err', errMsg)
        })
    })
    .catch((err) => {
      const errMsg = String(err).replace('Error: ', '')
      notify('err', errMsg)
    })
  return
}

import notify from '../utils/notify'
import { addPoint } from '../db/point'
import { TisComplete, change, get } from '../db/todo'

//TODO: delete all history todo complete
export default async function () {
  const getHash = window.location.href.split(/#/)[1]
  const [hash, id] = getHash.split('?id=')

  let isComplete: TisComplete
  if (hash.split('/')[1] === 'complete') {
    isComplete = 'true'
  } else {
    isComplete = 'false'
  }

  let isFail: TisComplete
  if (hash.split('/')[1] === 'fail') {
    isFail = 'true'
    isComplete = 'true'
  } else {
    isFail = 'false'
  }

  await change({
    id: Number(id),
    UpdatedAt: Date.now(),
    isComplete,
    isFail,
  })
    .then(async () => {
      const GET_INFO = await get(Number(id))
      let point: number
      let MSG = ''
      switch (hash) {
      case 'quest/complete':
        point = GET_INFO!.point.success
        MSG = 'complete'
        break
      case 'quest/undo/complete':
        point = GET_INFO!.point.success * -1
        MSG = 'undo complete'
        break
      case 'quest/undo/fail':
        point = GET_INFO!.point.fail
        MSG = 'undo fail'
        break
      default:
        point = GET_INFO!.point.fail * -1
        MSG = 'fail status'
        break
      }
      await addPoint(point)
        .then(() => {
          notify('success', `Success ${MSG} Task!`)
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
  return (window.location.href = '#')
}

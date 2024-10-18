import notify from '../utils/notify'
import { modifePoint } from '../db/point'
import { TisComplete, change, get } from '../db/todo'

// TODO: after complete dont go to history
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

  change({
    id: Number(id),
    UpdatedAt: Date.now(),
    isComplete,
    isFail,
  })
    .then(async () => {
      const GET_INFO = await get(Number(id))
      let point: number
      let MSG = ''
      let HREF = ''
      if (hash === 'quest/complete') {
        point = GET_INFO!.point.success
        MSG = 'complete'
        HREF = '#quest/history'
      } else if (hash === 'quest/undo/complete') {
        point = GET_INFO!.point.success * -1
        MSG = 'undo complete'
        HREF = '#'
      } else if (hash === 'quest/undo/fail') {
        point = GET_INFO!.point.fail
        MSG = 'undo fail'
        HREF = '#'
      } else {
        point = GET_INFO!.point.fail * -1
        MSG = 'fail status'
        HREF = '#quest/history'
      }
      await modifePoint(point)
        .then(() => {
          window.location.href = HREF
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
  return
}
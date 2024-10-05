import db from './init'
import { modifePoint, totalPoint } from './point'
import { get } from './redeem'

export const buy = async (id: number) => {
  const getOldData = await db.reward.get(id as never)
  if (getOldData) {
    const QTY = getOldData.qty
    const getTotalPoint = await totalPoint()
    if (getTotalPoint) {
      const getInfoReward = await get(id)
      if (getInfoReward) {
        const PRICE = getInfoReward.point
        await modifePoint(getTotalPoint - PRICE)
        return await db.reward.put({ id: id as never, qty: QTY + 1 })
      }
    }
  }
  return await db.reward.put({ id: id as never, qty: 1 })
}
export const sell = async (id: number) => {
  const getOldData = await db.reward.get(id as never)
  if (getOldData) {
    const QTY = getOldData.qty
    if (QTY > 1) {
      const getTotalPoint = await totalPoint()
      if (getTotalPoint) {
        const getInfoReward = await get(id)
        if (getInfoReward) {
          const PRICE = getInfoReward.point
          await modifePoint(PRICE + getTotalPoint)
          return await db.reward.put({ id: id as never, qty: QTY - 1 })
        }
      }
    }
  }
}

export const complete = async (id: number) => {
  const getOldData = await db.reward.get(id as never)
  if (getOldData) {
    const QTY = getOldData.qty
    if (QTY > 1) {
      return await db.reward.put({ id: id as never, qty: QTY - 1 })
    }
  }
}

export const list = async (from: number, to: number) => {
  const result = await db.reward.limit(to).offset(from).sortBy('UpdatedAt')
  return result
}
export const total = async () => {
  return await db.reward.count()
}

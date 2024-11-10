import db from './init'
import { addPoint, totalPoint } from './point'
import { get } from './redeem'

export const buy = async (id: number) => {
  const getInfoReward = await get(id)
  const getTotalPoint = (await totalPoint()) || 0
  const PRICE = getInfoReward!.point
  const countPoint = getTotalPoint - PRICE

  if (countPoint < 0) {
    throw 'not enough point'
  }
  await addPoint(-1 * PRICE)

  const getOldData = await db.reward.get(id as never)
  if (getOldData) {
    const QTY = getOldData.qty
    return await db.reward.put({ id: id as never, qty: QTY + 1 })
  }
  return await db.reward.put({ id: id as never, qty: 1 })
}

export const sell = async (id: number) => {
  const getOldData = await db.reward.get(id as never)

  if (getOldData) {
    const OLD_QTY = Number(getOldData!.qty)
    if (OLD_QTY === 1) {
      await db.reward.delete(id as never)
    } else {
      await db.reward.put({ id: id as never, qty: OLD_QTY - 1 })
    }
    const getDataRedeem = await db.redeem.get(id as never)
    await addPoint(Number(getDataRedeem!.point))
  }
}

export const use = async (id: number) => {
  const getOldData = await db.reward.get(id as never)
  if (getOldData) {
    const OLD_QTY = getOldData.qty
    if (OLD_QTY > 1) {
      return await db.reward.put({ id: id as never, qty: OLD_QTY - 1 })
    } else {
      return await db.reward.delete(id as never)
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

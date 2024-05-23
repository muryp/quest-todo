import db from './init'
import { TvalReward } from '../../mock/reward'

export const create = async (data: TvalReward) => {
  return await db.reward.add(data)
}

export const list = async (total: number) => {
  return await db.reward.limit(total).toArray()
}
export const get = async (id: never) => {
  return await db.reward.get(id)
}

export const update = async (data: TvalReward) => {
  return await db.reward.put(data)
}

export const remove = async (id: never) => {
  return await db.reward.delete(id)
}

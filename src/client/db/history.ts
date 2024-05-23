import { TvalHistory } from '../../mock/history'
import db from './init'

export const create = async (data: TvalHistory) => {
  return await db.history.add(data)
}
export const list = async (total: number) => {
  return await db.reward.limit(total).toArray()
}
export const update = async (data: TvalHistory) => {
  return await db.history.put(data)
}
/**
 * @param id never => this you can use id string or array string
 */
export const remove = async (id: never) => {
  return await db.history.delete(id)
}

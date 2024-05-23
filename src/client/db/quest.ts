import db from './init'
import type { TvalQuest } from '../../mock/listQuest'

export const create = async (data: TvalQuest) => {
  return await db.quest.add(data)
}

export const list = async (total: number,offset:number) => {
  return await db.reward.limit(total).offset(offset).toArray()
}
/**
 * @param id never => this you can use id string or array string
 */
export const get = async (id: never) => {
  return await db.quest.get(id)
}

/**
 * @param id never => this you can use id string or array string
 */
export const remove = async (id: never) => {
  return await db.quest.delete(id)
}

export const update = async (data: TvalQuest) => {
  return await db.quest.put(data)
}

export const search = async (title: string) => {
  const rgTitle = new RegExp(title, 'i')
  return await db.quest
    .filter(q => rgTitle.test(q.title))
    .toArray()
}
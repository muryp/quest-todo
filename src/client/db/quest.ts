import db from './init'
import type { TvalQuest } from '../../mock/listQuest'

export const add = async (data: TvalQuest) => {
  return await db.quest.add(data)
}
export const total = async () => {
  return await db.quest.count()
}

export const list = async (total: number, offset: number) => {
  return await db.quest.limit(total).offset(offset).toArray()
}
/**
 * @param id never => this you can use id string or array string
 */
export const get = async (id: number) => {
  return await db.quest.get(id as never)
}

/**
 * @param id never => this you can use id string or array string
 */
export const remove = async (id: number) => {
  return await db.quest.delete(id as never)
}

export const put = async (data: TvalQuest) => {
  return await db.quest.put(data)
}

export const search = async (title: string) => {
  const rgTitle = new RegExp(title, 'i')
  return await db.quest.filter((q) => rgTitle.test(q.title)).toArray()
}

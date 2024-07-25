import db from './init'
import type { TInputDbTodo, TvalQuest } from '../../mock/listTodo'

export const add = async (data: TInputDbTodo) => {
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

export const search = async ({
  title,
  offset,
  isAccend,
  typeAccend,
  TOTAL,
}: {
  title: string
  offset: number
  isAccend: boolean
  typeAccend: string
  TOTAL: number
}): Promise<[TvalQuest[], number]> => {
  const rgTitle = new RegExp(title, 'i')
  const bassicQuery = db.quest
    .orderBy(typeAccend)
    .filter((q) => rgTitle.test(q.title))
  const TOTAL_DB = await bassicQuery.count()
  if (isAccend) {
    const list = await bassicQuery.limit(TOTAL).offset(offset).toArray()
    return [list, TOTAL_DB]
  }
  const list = await bassicQuery.offset(offset).limit(TOTAL).reverse().toArray()
  return [list, TOTAL_DB]
}

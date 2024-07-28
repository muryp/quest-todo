import db from './init'
import type { TInputDbTodo, TvalQuest } from '../../mock/listTodo'

// TODO: clear complete task
// TODO: add point if complete, reduce point for incomplete
// TODO: total point
export const add = async (data: TInputDbTodo) => {
  return await db.quest.add(data)
}
export type TisComplete = 'true' | 'false'
export const total = async (isComplete: TisComplete) => {
  return await db.quest.where('isComplete').equals(isComplete).count()
}

export const list = async (
  total: number,
  offset: number,
  isComplete: TisComplete,
) => {
  const result = await db.quest
    .where('isComplete')
    .equals(isComplete)
    .limit(total)
    .offset(offset)
    .reverse()
    .sortBy('UpdatedAt')
  return result
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

export const change = async (
  data:
    | {
        id: number
        UpdatedAt: number
        isComplete: TisComplete
      }
    | TvalQuest,
) => {
  return await db.quest
    .where('id')
    .equals(data.id || 1)
    .modify(data)
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
  const bassicQuery = db.quest.filter((q) => rgTitle.test(q.title))
  const TOTAL_DB = await bassicQuery.count()
  // const sortBy = bassicQuery.sortBy(typeAccend.toLowerCase())
  if (isAccend) {
    const list = await bassicQuery
      .limit(TOTAL)
      .offset(offset)
      .sortBy(typeAccend.toLowerCase())
    return [list, TOTAL_DB]
  }
  const list = await bassicQuery
    .offset(offset)
    .limit(TOTAL)
    .reverse()
    .sortBy(typeAccend.toLowerCase())

  return [list, TOTAL_DB]
}

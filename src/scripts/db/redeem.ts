import { TvalRedeem } from '../../mock/redeem'
import db from './init'

export const add = function (data: TvalRedeem) {
  db.redeem.add(data)
}

export const list = async (from: number, to: number) => {
  const result = await db.redeem.limit(to).offset(from).sortBy('UpdatedAt')
  return result
}

export function get(id: number) {
  return db.redeem.get(id as never)
}

export const total = async () => {
  return await db.redeem.count()
}

export function change(id: number, data: TvalRedeem) {
  return db.redeem.where('id').equals(id).modify(data)
}

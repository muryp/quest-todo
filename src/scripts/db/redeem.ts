import { TvalRedeem } from '../../mock/redeem'
import db from './init'

export const add = function (data: TvalRedeem) {
  db.redeem.add(data)
}

export const list = async (from: number, to: number) => {
  const result = await db.redeem.limit(to).offset(from).sortBy('UpdatedAt')
  return result
}

export const total = async () => {
  return await db.redeem.count()
}

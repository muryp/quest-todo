import db from './init'

const isDefine = await db.point.get({ id: 1 })

export const totalPoint = async () => {
  if (isDefine) {
    const { point } = (await db.point.get({ id: 1 })) as { point: number }
    return point
  }
}

export const modifePoint = async (point: number) => {
  if (isDefine) {
    const POINT_BEFORE = (await totalPoint()) as number
    const POINT_AFTER = POINT_BEFORE + point
    return await db.point.where('id').equals(1).modify({ point: POINT_AFTER })
  }
  db.point.add({ id: 1, point })
}

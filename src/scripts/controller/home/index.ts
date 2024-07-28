import searchOnType from './search'
import type { TInputDbTodo } from '../../../mock/listTodo'
import render from '../../../utils/render'
import { totalPoint } from '../../db/point'

interface TInputGetList {
  TOTAL: number
  offset: number
}
export type getListFn = (
  args: TInputGetList,
) => Promise<[TInputDbTodo[], number]>

export default async (getList: getListFn) => {
  render(getList, false)
  searchOnType()
  const TOTAL_POINT = await totalPoint()!
  const ElTotalPoint = document.getElementById('total-point')!
  ElTotalPoint.innerHTML = `Total Point: ${String(TOTAL_POINT || 0)}`
}

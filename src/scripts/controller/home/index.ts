import searchOnType from './search'
import type { TInputDbTodo } from '../../../mock/listTodo'
import render from '../../../utils/render'

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
}

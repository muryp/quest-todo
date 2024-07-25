import render from '../../utils/render'
import { list, total } from '../db/todo'
import { getListFn } from './home'

const getList: getListFn = async ({ TOTAL, offset }) => {
  return [await list(TOTAL, offset, 'true'), await total('true')]
}
export default function () {
  render(getList, true)
}

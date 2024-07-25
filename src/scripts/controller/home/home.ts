import home from '.'
import { list, total } from '../../db/todo'

export default () => {
  return home(async ({ TOTAL, offset }) => {
    return [await list(TOTAL, offset), await total()]
  })
}

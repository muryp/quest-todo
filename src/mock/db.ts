import { add, list } from '../scripts/db/todo'
import { LIST_QUEST } from './listTodo'

const DataComplete = await list(5, 0, 'true')
const DataUnComplete = await list(5, 0, 'false')
const isHaveData = DataComplete.length || DataUnComplete.length
if (!isHaveData) {
  console.log('add data...')
  LIST_QUEST.forEach((data) => add(data))
}

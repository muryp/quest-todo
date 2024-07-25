import { add } from '../scripts/db/todo'
import { LIST_QUEST } from './listTodo'

LIST_QUEST.forEach((data) => add(data))